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

    // TO-DO: CHECK, if it is required here. Delete for now:
    // updateCartPriceVariable = (
    //     sessionIdCart,
    //     sessionIdCartPrice,
    //     productItems,
    //     handlingRate
    // ) => {
    //     let newItemsPrice = 0;
    //     let newHandlingFee = 0;

    //     for (const item of sessionIdCart) {
    //         newItemsPrice +=
    //             item.qty * this.getPriceByProductId(productItems, item.itemId);
    //     }

    //     newHandlingFee = newItemsPrice * handlingRate;

    //     sessionIdCartPrice.items = newItemsPrice;
    //     sessionIdCartPrice.handling = newHandlingFee;
    //     sessionIdCartPrice.total = newItemsPrice + newHandlingFee;

    //     console.log("new sessionIdCartPrice: ", sessionIdCartPrice);

    //     // TO-DO: CHECK, if it is required here. Delete for now:
    //     // this.controller.handleViewOfTotalPrceInCart(sessionIdCartPrice.total);
    //     return sessionIdCartPrice;
    // };

    // handleChangeQtyInCart = (sessionIdCart, itemId, adder) => {
    //     // TEST-TBS REMOVE IN PROD
    //     console.log("sessionIdCart: ", sessionIdCart);
    //     for (const product of sessionIdCart) {
    //         if (product.itemId === itemId) {
    //             if (product.qty + adder > 0) {
    //                 product.qty += adder;
    //                 console.log(
    //                     `MODEL: try to update a [*** product *** ]: ${product} in database.cartsData`
    //                 );
    //                 this.controller.handleAddDocToFirestore(
    //                     "cartsData",
    //                     product
    //                 );

    //                 // TO-DO: CHECK, if it is required here. Delete for now:
    //                 // console.log(
    //                 //     "MODEL - [*** sessionIdCart ***]: ",
    //                 //     sessionIdCart
    //                 // );
    //                 // console.log(
    //                 //     "MODEL - [*** sessionIdCartPrice ***]: ",
    //                 //     sessionIdCartPrice
    //                 // );
    //                 // console.log(
    //                 //     "MODEL - [*** dataBase.productItems ***]: ",
    //                 //     dataBase.productItems
    //                 // );
    //                 // console.log(
    //                 //     "MODEL - [*** sessionIdCustome ***]: ",
    //                 //     sessionIdCustomer
    //                 // );

    //                 // TO-DO: CHECK, if it is required here. Delete for now:
    //                 this.controller.updateCartPriceVariable();
    //                 this.controller.handleViewOfPartQty(itemId, product.qty);
    //             } else {
    //                 confirm("Hi there, do you like to delete item from cart?");
    //                 // Get docId by itemId
    //                 const docId = this.controller.getDocIdFromArrayByItemId(
    //                     sessionIdCart,
    //                     itemId
    //                 );
    //                 console.log(
    //                     `MODEL: TRY TO DELETE PRODUCT WITH DocID ${docId} from database.cartsData`
    //                 );
    //                 this.controller.handleDeleteDocFromFirestore(
    //                     "cartsData",
    //                     docId
    //                 );
    //                 // Delete object element with docId from array:
    //                 sessionIdCart =
    //                     this.controller.deleteObjectFromArrayByDocId(
    //                         sessionIdCart,
    //                         docId
    //                     );

    //                 // TO-DO: CHECK, if it is required here. Delete for now:
    //                 // console.log(
    //                 //     "MODEL - [*** sessionIdCart ***]: ",
    //                 //     sessionIdCart
    //                 // );
    //                 // console.log(
    //                 //     "MODEL - [*** sessionIdCartPrice ***]: ",
    //                 //     sessionIdCartPrice
    //                 // );
    //                 // console.log(
    //                 //     "MODEL - [*** dataBase.productItems ***]: ",
    //                 //     dataBase.productItems
    //                 // );
    //                 // console.log(
    //                 //     "MODEL - [*** sessionIdCustome ***]: ",
    //                 //     sessionIdCustomer
    //                 // );

    //                 this.modelCart.updateCartPriceVariable();
    //                 // TO-DO: CHECK, if it is required here. Delete for now:
    //                 this.controller.renderCartSummary(sessionIdCart);
    //             }
    //         }
    //     }
    //     this.controller.handleViewOfTotalPrceInCart();
    //     return sessionIdCart;
    // };

    // Add new product to cart:
    // addProductToCart = (sessionIdCart, itemId, userId) => {
    //     // Check if itemId is already in cart - add qty then
    //     const isInTheCart = this.controller.getDocIdFromArrayByItemId(
    //         sessionIdCart,
    //         itemId
    //     );

    //     if (isInTheCart) {
    //         this.controller.handleChangeQtyInCart(sessionIdCart, itemId, 1);
    //     } else {
    //         const newCartElement = {
    //             docId: this.controller.handleNewIdGeneration(),
    //             itemId: itemId,
    //             qty: 1,
    //             userId: userId,
    //         };

    //         console.log(
    //             "MODEL: try to add to database.cartsData a [*** newCartElement *** ]: ",
    //             newCartElement
    //         );
    //         this.controller.handleAddDocToFirestore(
    //             "cartsData",
    //             newCartElement
    //         );

    //         sessionIdCart.push(newCartElement);
    //         console.log("an updated [*** sessionIdCart ***]: ", sessionIdCart);
    //     }

    //     return sessionIdCart;
    // };
}
