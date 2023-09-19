// import iconAddOrder from "../../other_assets/icon-add-order.png";
// import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
import iconOrder from "../../other_assets/icon-order.png";

export class ViewCart {
    constructor(controller) {
        this.controller = controller;
    }
    checkModuleLinkage = () => {
        console.log("HELLO, ViewCart is connected!");
    };

    // Right Container - Create Cart Title
    createCartSummaryTitle = () => {
        const title = document.createElement("h2");
        title.classList = "cart-links-title";
        title.innerText = "Cart";
        return title;
    };

    // Right Container - Create Cart Item Button
    createCartItemButton = (imageURL) => {
        const button = document.createElement("button");
        button.classList = "cart-link-btn";
        button.style = `background-image: url(${imageURL});`;
        return button;
    };

    // Right Container - Create Go-To-Cart Button
    createGoToCartButton = () => {
        const wrapper = document.createElement("div");
        wrapper.classList = "cart-goto-btn-wrapper";

        const button = document.createElement("button");
        button.classList = "cart-goto-btn";

        const image = document.createElement("img");
        image.src = iconOrder;
        image.alt = "Select";

        const textSpan = document.createElement("span");
        textSpan.innerText = " Cart";

        // Append elemens to respective parents
        button.appendChild(image);
        button.appendChild(textSpan);
        wrapper.appendChild(button);

        return wrapper;
    };

    // Right Container - Render Cart Summaary
    createNewCartSummaryNoTotal = (sessionIdCart) => {
        // this.controller.clearContainerRight();

        // Right Container - Render Cart Title
        const cartSummaryBlock = this.createCartSummaryTitle();

        const wrapper = document.createElement("div");
        wrapper.classList = "cart-links-wrapper";

        // Right Container - Render Cart Icons
        console.log("Action: Right Container - Render Cart Icons");
        for (const productObject of sessionIdCart) {
            console.log("productObject: ", productObject);
            console.log("productObject.itemId: ", productObject.itemId);

            const productImage = this.controller.getImageByProductId(
                productObject.itemId
            );

            // FOR TEST-TBS
            console.log("productImage: ", productImage);

            const imageURL = this.controller.getUrlByNameLocal(productImage);

            // FOR TEST-TBS
            console.log("imageURL: ", imageURL);

            const cartItem = this.createCartItemButton(imageURL);
            wrapper.appendChild(cartItem);
        }

        cartSummaryBlock.appendChild(wrapper);

        // Right Container - Render Go-To-Cart Button
        const button = this.createGoToCartButton();
        cartSummaryBlock.appendChild(button);

        // TEST-TBS - REMOVE FO PROD
        // console.log("cartSummaryBlock: ", cartSummaryBlock);

        return cartSummaryBlock;

        // this.controller.containerRightNode.appendChild(cartSummaryBlock);
    };
}
