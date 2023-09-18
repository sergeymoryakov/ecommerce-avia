// import iconAddOrder from "../../other_assets/icon-add-order.png";
import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
// import iconOrder from "../../other_assets/icon-order.png";

export class ViewProducts {
    constructor(controller) {
        this.controller = controller;
        this.containerLeftNode = document.getElementById("containerLeft");
        // this.containerRightNode = document.getElementById("containerRight");
    }
    // FOR TEST AND TBS - REMOVE FOR PROD
    checkModuleLinkage = () => {
        console.log("HELLO, ViewProducts is connected!");
    };

    // Clear container
    clearContainerLeft = () => {
        this.containerLeftNode.innerHTML = "";
    };

    createProductItemCard = (productObject) => {
        // Create elements
        const productItemDiv = document.createElement("div");
        productItemDiv.classList = "product-item";
        productItemDiv.id = productObject.docId;

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
    renderProductItems = (arrayProducts) => {
        // Clear container
        this.clearContainerLeft();

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
        this.containerLeftNode.appendChild(productList);
    };
}
