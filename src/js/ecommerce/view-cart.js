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
    createCartItemButton = (imageURL, productId) => {
        const button = document.createElement("button");
        button.classList = "cart-link-btn";
        button.id = `cart-link-btn_${productId}`;
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
        // console.log("Action: Right Container - Render Cart Icons");
        for (const productObject of sessionIdCart) {
            // TEST-TBS - REMOVE IN PROD
            // console.log("productObject: ", productObject);
            // console.log("productObject.itemId: ", productObject.itemId);

            const productImage = this.controller.getImageByProductId(
                productObject.itemId
            );

            // FOR TEST-TBS
            // console.log("productImage: ", productImage);

            const imageURL = this.controller.getUrlByNameLocal(productImage);

            // FOR TEST-TBS
            // console.log("imageURL: ", imageURL);

            const cartItem = this.createCartItemButton(
                imageURL,
                productObject.docId
            );
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

    // Left Container - Create Product Item Card block

    createProductCardForCart = (productObject) => {
        // Create elements
        const productCardMain = document.createElement("div");
        productCardMain.classList = "cart-item";
        // TO-DO : verify if "itemId" is better to use instead of "docId" here:
        productCardMain.id = `cart-item_${productObject.docId}`;

        const cardImageWrapper = document.createElement("div");
        cardImageWrapper.classList = "cart-item__img-wrapper";

        const image = document.createElement("img");
        image.classList = "cart-item__img";
        image.src = this.controller.getUrlByNameLocal(productObject.itemImg);

        const cardSummaryWrapper = document.createElement("div");
        cardSummaryWrapper.classList = "cart-item__summary-wrapper";

        const cardSummary = document.createElement("div");
        cardSummary.classList = "cart-item__summary";

        const cardNameWrapper = document.createElement("div");
        cardNameWrapper.classList = "cart-item__element-wrapper";

        const productName = document.createElement("h1");
        productName.classList = "cart-item__product-name";
        productName.textContent = productObject.itemName;

        const partNumberWrapper = document.createElement("div");
        partNumberWrapper.classList = "cart-item__element-wrapper";

        const partNumberSupport = document.createElement("p");
        partNumberSupport.classList = "cart-item__support-txt";
        partNumberSupport.textContent = "Part Number: ";

        const partNumber = document.createElement("h3");
        partNumber.classList = "cart-item__part-number";
        partNumber.textContent = productObject.itemPN;

        const partConditionWrapper = document.createElement("div");
        partConditionWrapper.classList = "cart-item__element-wrapper";

        const partConditionSupport = document.createElement("p");
        partConditionSupport.classList = "cart-item__support-txt";
        partConditionSupport.textContent = "Condition: ";

        const partCondition = document.createElement("h3");
        partCondition.classList = "cart-item__condition";
        partCondition.textContent = productObject.itemCondition;

        const partCertificationWrapper = document.createElement("div");
        partCertificationWrapper.classList = "cart-item__element-wrapper";

        const partCertificationSupport = document.createElement("p");
        partCertificationSupport.classList = "cart-item__support-txt";
        partCertificationSupport.textContent = "Certification: ";

        const partCertification = document.createElement("h3");
        partCertification.classList = "cart-item__certification";
        partCertification.textContent = productObject.itemCertification;

        const partAvailabilityWrapper = document.createElement("div");
        partAvailabilityWrapper.classList = "cart-item__element-wrapper";

        const partAvailabilitySupport = document.createElement("p");
        partAvailabilitySupport.classList = "cart-item__support-txt";
        partAvailabilitySupport.textContent = "Availability: ";

        const partAvailability = document.createElement("h3");
        partAvailability.classList = "cart-item__availability";
        partAvailability.textContent = productObject.itemLeadTime;

        const priceElementWrapper = document.createElement("div");
        priceElementWrapper.classList = "cart-item__price-qty";

        const priceElement = document.createElement("h3");
        priceElement.classList = "cart-item__product-price";
        priceElement.textContent = `${productObject.itemCurrency} ${productObject.itemPrice} x ${productObject.itemQty}`;

        const qtyModifierWrapper = document.createElement("div");
        qtyModifierWrapper.classList = "cart-element__qty-mod_wrapper";

        const qtyModifierDeductBtn = document.createElement("button");
        qtyModifierDeductBtn.classList = "cart-element__qty-mod_deduct-btn";
        qtyModifierDeductBtn.innerText = " - ";

        const qtyModifierIndicator = document.createElement("button");
        qtyModifierIndicator.classList = "cart-element__qty-mod_qty";
        qtyModifierIndicator.innerText = productObject.itemQty;

        const qtyModifierAddBtn = document.createElement("button");
        qtyModifierAddBtn.classList = "cart-element__qty-mod_add-btn";
        qtyModifierAddBtn.innerText = " + ";

        // Assembly HTML code:

        cardImageWrapper.appendChild(image);

        cardNameWrapper.appendChild(productName);
        cardSummary.appendChild(cardNameWrapper);

        partNumberWrapper.appendChild(partNumberSupport);
        partNumberWrapper.appendChild(partNumber);
        cardSummary.appendChild(partNumberWrapper);

        partConditionWrapper.appendChild(partConditionSupport);
        partConditionWrapper.appendChild(partCondition);
        cardSummary.appendChild(partConditionWrapper);

        partCertificationWrapper.appendChild(partCertificationSupport);
        partCertificationWrapper.appendChild(partCertification);
        cardSummary.appendChild(partCertificationWrapper);

        partAvailabilityWrapper.appendChild(partAvailabilitySupport);
        partAvailabilityWrapper.appendChild(partAvailability);
        cardSummary.appendChild(partAvailabilityWrapper);

        qtyModifierWrapper.appendChild(qtyModifierDeductBtn);
        qtyModifierWrapper.appendChild(qtyModifierIndicator);
        qtyModifierWrapper.appendChild(qtyModifierAddBtn);

        priceElementWrapper.appendChild(priceElement);
        priceElementWrapper.appendChild(qtyModifierWrapper);
        cardSummary.appendChild(priceElementWrapper);

        cardSummaryWrapper.appendChild(cardSummary);

        productCardMain.appendChild(cardImageWrapper);
        productCardMain.appendChild(cardSummaryWrapper);

        console.log("productCardMain: ", productCardMain);

        return productCardMain;
    };
}
