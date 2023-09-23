export class ModelCart {
    constructor() {}
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
        return sessionIdCartPrice;
    };

    changeQtyInCart = (sessionIdCart, itemId, adder) => {
        for (const product of sessionIdCart) {
            if (product.itemId === itemId) {
                if (product.qty + adder <= 0) {
                    confirm("Hi there, do you like to delete item from cart?");
                    console.log(
                        `ACTION NEEDED: DELETE PRODUCT WITH ID ${product.itemId} FROM CART.`
                    );
                } else {
                    product.qty += adder;
                }
            }
        }
        return sessionIdCart;
    };
}
