export class ModelCart {
    constructor(controller) {
        this.controller = controller;
    }
    checkModuleLinkage = () => {
        console.log("HELLO, ModelCart is connected!");
    };

    getPriceByProductId = (productItems, productId) => {
        const productById = productItems.filter(
            (product) => product.itemId === productId
        );
        // console.log("productById: ", productById);
        // console.log("productById[0]: ", productById[0]);
        return productById[0].itemPrice;
    };

    updateCartPriceVariable = (
        sessionIdCart,
        sessionIdCartPrice,
        productItems,
        handlingRate
    ) => {
        let newItemsPrice = 0;
        let newHandlingFee = 0;

        for (const item of sessionIdCart) {
            newItemsPrice +=
                item.qty * this.getPriceByProductId(productItems, item.itemId);
        }
        newHandlingFee = newItemsPrice * handlingRate;

        sessionIdCartPrice.items = newItemsPrice;
        sessionIdCartPrice.handling = newHandlingFee;
        sessionIdCartPrice.total = newItemsPrice + newHandlingFee;

        console.log("new sessionIdCartPrice: ", sessionIdCartPrice);

        this.controller.handleViewOfTotalPrceInCart(sessionIdCartPrice.total);
        return sessionIdCartPrice;
    };

    changeQtyInCart = (sessionIdCart, itemId, adder) => {
        // TEST-TBS REMOVE IN PROD
        console.log("sessionIdCart: ", sessionIdCart);
        for (const product of sessionIdCart) {
            if (product.itemId === itemId) {
                if (product.qty + adder > 0) {
                    product.qty += adder;
                    console.log(
                        `MODEL: try to update a [*** product *** ]: ${product} in database.cartsData`
                    );
                    this.controller.handleAddDocToFirestore(
                        "cartsData",
                        product
                    );
                    this.controller.handleViewOfPartQty(itemId, product.qty);
                } else {
                    confirm("Hi there, do you like to delete item from cart?");
                    // Get docId by itemId
                    const docId = this.controller.getDocIdFromArrayByItemId(
                        sessionIdCart,
                        itemId
                    );
                    console.log(
                        `MODEL: TRY TO DELETE PRODUCT WITH DocID ${docId} from database.cartsData`
                    );
                    this.controller.handleDeleteDocFromFirestore(
                        "cartsData",
                        docId
                    );
                    // Delete object element with docId from array:
                    sessionIdCart =
                        this.controller.deleteObjectFromArrayByDocId(
                            sessionIdCart,
                            docId
                        );
                    this.controller.renderCartSummary(sessionIdCart);
                    this.controller.handleViewOfTotalPrceInCart();
                }
            }
        }
        return sessionIdCart;
    };

    // Add new product to cart:
    addProductToCart = (sessionIdCart, itemId, userId) => {
        // Check if itemId is already in cart - add qty then
        const isInTheCart = this.controller.getDocIdFromArrayByItemId(
            sessionIdCart,
            itemId
        );

        if (isInTheCart) {
            this.changeQtyInCart(sessionIdCart, itemId, 1);
        } else {
            const newCartElement = {
                docId: this.controller.handleNewIdGeneration(),
                itemId: itemId,
                qty: 1,
                userId: userId,
            };

            console.log(
                `MODEL: try to add a [*** newCartElement *** ]: ${newCartElement} to database.cartsData`
            );
            this.controller.handleAddDocToFirestore(
                "cartsData",
                newCartElement
            );

            sessionIdCart.push(newCartElement);
            console.log("an updated [*** sessionIdCart ***]: ", sessionIdCart);
        }

        return sessionIdCart;
    };
}
