import iconAddOrder from "../../other_assets/icon-add-order.png";
import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
// import iconOrder from "../../other_assets/icon-order.png";

export class ViewProducts {
    constructor(controller) {
        this.controller = controller;
    }
    // FOR TEST AND TBS - REMOVE FOR PROD
    checkModuleLinkage = () => {
        console.log("HELLO, ViewProducts is connected!");
    };

    createProductItemCard = (productObject) => {
        // Create elements
        const productItemDiv = document.createElement("div");
        productItemDiv.classList = "product-item";
        productItemDiv.id = `product-card_${productObject.itemId}`;

        const image = document.createElement("img");
        image.classList = "product-item__img";
        image.src = this.controller.getUrlByNameLocal(productObject.itemImg);

        const contentDiv = document.createElement("div");
        contentDiv.classList = "product-item__content";

        const contentName = document.createElement("h3");
        contentName.classList = "product-item__content_desc";
        contentName.textContent = productObject.itemName;

        const partNumber = document.createElement("p");
        partNumber.classList = "product-item__content_part-number";
        partNumber.textContent = productObject.itemPN;

        const priceBlockDiv = document.createElement("div");
        priceBlockDiv.classList = "product-item__content_price-block";

        const priceElement = document.createElement("h3");
        priceElement.classList = "product-item__content_price";
        priceElement.textContent = `$${productObject.itemPrice}`;

        const priceBtn = document.createElement("button");
        priceBtn.classList = "product-item__content_price-btn";
        priceBtn.id = `product-btn_${productObject.itemId}`;

        const priceBtnImg = document.createElement("img");
        priceBtnImg.classList = "product-item__content_price-btn-img";
        priceBtnImg.src = iconCart;
        priceBtnImg.alt = "Select";

        // Append elemens to respective parents
        priceBtn.appendChild(priceBtnImg);
        priceBlockDiv.appendChild(priceElement);
        priceBlockDiv.appendChild(priceBtn);

        contentDiv.appendChild(contentName);
        contentDiv.appendChild(partNumber);
        contentDiv.appendChild(priceBlockDiv);

        productItemDiv.appendChild(image);
        productItemDiv.appendChild(contentDiv);

        return productItemDiv;
    };

    // Left Container - Render product items
    createProductItemsList = (arrayProducts) => {
        // Clear container
        // this.controller.clearContainerLeft();

        // Create product list container
        const productList = document.createElement("div");
        productList.classList = "product-list";

        // Look through array to create item cards and add to products list
        for (const productObject of arrayProducts) {
            const newProductItemCard =
                this.createProductItemCard(productObject);
            productList.appendChild(newProductItemCard);
        }

        // Render product list container
        // this.controller.containerLeftNode.appendChild(productList);

        console.log("productList: ", productList);
        return productList;
    };

    createDetailedProductCard = (productObject) => {
        console.log("productObject: ", productObject);

        // Create elements
        const productCardMain = document.createElement("div");
        productCardMain.classList = "product-card";
        productCardMain.id = `prodCard_${productObject.itemId}`;

        const goBackBtn = document.createElement("button");
        goBackBtn.classList = "goto-products-btn";
        goBackBtn.innerText = "< Back to Products";

        const cardTopWrapper = document.createElement("div");
        cardTopWrapper.classList = "product-card__top-wrapper";

        const cardImageWrapper = document.createElement("div");
        cardImageWrapper.classList = "product-card__img-wrapper";

        const image = document.createElement("img");
        image.classList = "product-card__img";
        image.src = this.controller.getUrlByNameLocal(productObject.itemImg);

        const cardSummaryWrapper = document.createElement("div");
        cardSummaryWrapper.classList = "product-card__summary-wrapper";

        const cardSummary = document.createElement("div");
        cardSummary.classList = "product-card__summary";

        const productName = document.createElement("h1");
        productName.classList = "product-card__product-name";
        productName.textContent = productObject.itemName;

        const partNumberSupport = document.createElement("p");
        partNumberSupport.classList = "product-card__support-txt";
        partNumberSupport.textContent = "Part Number: ";

        const partNumber = document.createElement("h3");
        partNumber.classList = "product-card__part-number";
        partNumber.textContent = productObject.itemPN;

        const priceElementSupport = document.createElement("p");
        priceElementSupport.classList = "product-card__support-txt";
        priceElementSupport.textContent = "Price Per Unit: ";

        const priceElement = document.createElement("h3");
        priceElement.classList = "product-card__product-price";
        priceElement.textContent = `${productObject.itemCurrency} ${productObject.itemPrice}`;

        const partConditionSupport = document.createElement("p");
        partConditionSupport.classList = "product-card__support-txt";
        partConditionSupport.textContent = "Condition: ";

        const partCondition = document.createElement("h3");
        partCondition.classList = "product-card__condition";
        partCondition.textContent = productObject.itemCondition;

        const partCertificationSupport = document.createElement("p");
        partCertificationSupport.classList = "product-card__support-txt";
        partCertificationSupport.textContent = "Certification: ";

        const partCertification = document.createElement("h3");
        partCertification.classList = "product-card__certification";
        partCertification.textContent = productObject.itemCertification;

        const partAvailabilitySupport = document.createElement("p");
        partAvailabilitySupport.classList = "product-card__support-txt";
        partAvailabilitySupport.textContent = "Availability: ";

        const partAvailability = document.createElement("h3");
        partAvailability.classList = "product-card__availability";
        partAvailability.textContent = productObject.itemLeadTime;

        const addToCartBtn = document.createElement("button");
        addToCartBtn.classList = "product-card__add-to-cart-btn";

        const addToCartBtnImg = document.createElement("img");
        // addToCartBtnImg.classList = "product-item__content_price-btn-img";
        addToCartBtnImg.src = iconAddOrder;
        addToCartBtnImg.alt = "Select";

        const textSpan = document.createElement("span");
        textSpan.innerText = " Add to Cart";

        const cardBottomWrapper = document.createElement("div");
        cardBottomWrapper.classList = "product-card__bottom-wrapper";

        const cardDescription = document.createElement("h3");
        cardDescription.classList = "product-card__description";
        cardDescription.textContent = "Product Description";

        const cardDescriptionText = document.createElement("p");
        cardDescriptionText.classList = "product-card__description-text";
        cardDescriptionText.textContent = productObject.itemDescription;

        // TO-DO STARTED
        cardImageWrapper.appendChild(image);

        cardSummary.appendChild(productName);
        cardSummary.appendChild(partNumberSupport);
        cardSummary.appendChild(partNumber);
        cardSummary.appendChild(priceElementSupport);
        cardSummary.appendChild(priceElement);
        cardSummary.appendChild(partConditionSupport);
        cardSummary.appendChild(partCondition);
        cardSummary.appendChild(partCertificationSupport);
        cardSummary.appendChild(partCertification);
        cardSummary.appendChild(partAvailabilitySupport);
        cardSummary.appendChild(partAvailability);

        addToCartBtn.appendChild(addToCartBtnImg);
        addToCartBtn.appendChild(textSpan);

        cardSummaryWrapper.appendChild(cardSummary);
        cardSummaryWrapper.appendChild(addToCartBtn);

        cardTopWrapper.appendChild(cardImageWrapper);
        cardTopWrapper.appendChild(cardSummaryWrapper);

        cardBottomWrapper.appendChild(cardDescription);
        cardBottomWrapper.appendChild(cardDescriptionText);

        productCardMain.appendChild(goBackBtn);
        productCardMain.appendChild(cardTopWrapper);
        productCardMain.appendChild(cardBottomWrapper);

        console.log("productCardMain: ", productCardMain);

        return productCardMain;
    };
}
