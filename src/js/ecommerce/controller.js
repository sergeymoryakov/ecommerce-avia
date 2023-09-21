import { ViewProducts } from "./view-products.js";
import { ViewCart } from "./view-cart.js";
import { ViewOrders } from "./view-orders.js";
import { ViewAdmin } from "./view-admin.js";
import { ViewSuperadmin } from "./view-superadmin.js";
import { ModelFirebase } from "../common/model-firebase.js";
import { ModelProducts } from "./model-products.js";
import { ModelCart } from "./model-cart.js";
import { ModelOrders } from "./model-orders.js";
import { ModelAdmin } from "./model-admin.js";

// Import random ID generator
import { v4 as uuidv4 } from "uuid";

// Get DB collection names (dbCollectionNames) from constants.js
import { dbCollectionNames } from "../common/constants.js";

// Init database instance (dataBase):
let dataBase = {};

// Init current session personal variables:
let sessionId = "";
let sessionIdCart = {};
let sessionIdOrders = {};

// Init HTML variables:
const productsList = document.createElement("div");
productsList.innerHTML = "";
const cartSummaryNoTotal = document.createElement("div");
cartSummaryNoTotal.innerHTML = "";
const ordersHistorySummary = document.createElement("div");
ordersHistorySummary.innerHTML = "";

// Init cross-ref Map: image - url
const imageLinksMap = new Map();

export class Controller {
    constructor() {
        this.viewProducts = new ViewProducts(this);
        this.viewCart = new ViewCart(this);
        this.viewOrders = new ViewOrders(this);
        this.viewAdmin = new ViewAdmin();
        this.viewSuperadmin = new ViewSuperadmin();
        this.modelFirebase = new ModelFirebase();
        this.modelProducts = new ModelProducts();
        this.modelCart = new ModelCart();
        this.modelOrders = new ModelOrders();
        this.modelAdmin = new ModelAdmin();

        this.containerLeftNode = document.getElementById("containerLeft");
        this.containerRightNode = document.getElementById("containerRight");
    }
    initializeAppMain = async () => {
        // TEST AND TBS - REMOVE IN PRODUCTION
        console.log("HELLO! INIT CARRIED OUT SUCCESFULLY");
        this.viewProducts.checkModuleLinkage();
        this.viewCart.checkModuleLinkage();
        this.viewOrders.checkModuleLinkage();
        this.viewAdmin.checkModuleLinkage();
        this.viewSuperadmin.checkModuleLinkage();
        this.modelFirebase.checkModuleLinkage();
        this.modelProducts.checkModuleLinkage();
        this.modelCart.checkModuleLinkage();
        this.modelOrders.checkModuleLinkage();
        this.modelAdmin.checkModuleLinkage();

        // Get data from database (Firebase) and keep in dataBase{}
        console.log(
            "Action: Getdata from database (Firebase) and keep in dataBase{}."
        );

        for (const collectionName of dbCollectionNames) {
            dataBase[collectionName] = await this.modelFirebase.get(
                collectionName
            );
            console.log(
                `dataBase.${collectionName}: `,
                dataBase[collectionName]
            );
        }

        // Create Image Links Map:
        console.log("Action: Create Image Links Map imageLinksMap{}:");

        for (const docName of dataBase.productItems) {
            const imageURL = await this.modelFirebase
                .getLinkToImage(docName.itemImg)
                .then((url) => {
                    // console.log("The download URL is: ", url);
                    return url;
                })
                .catch((error) => {
                    console.log("Error getting download URL: ", error);
                });
            // FOR TEST AND TBS - REMOVE IN PROD:
            // console.log("imageURL: ", imageURL);

            imageLinksMap.set(docName.itemImg, imageURL);
        }

        // FOR TEST AND TBS - REMOVE IN PROD:
        // console.log("imageLinksMap: ", imageLinksMap);

        // Assign to sessionId a first ID from DB
        sessionId = dataBase.usersData[0].userId;
        console.log("Assigned to sessionId: ", sessionId);

        // Alert - Popup inform the test name usage
        // This section was updated during last commit but failed to deploy
        // ACTION NEEDED: UNCOMMENT BELOW FOR PRODUCTION:
        // confirm(
        //     `Hi there, this application was set for demonstration purpose, therefore a User ID ${sessionId} was assigned for this session. Fake Name, Lastname, and other user properties are generated for practice purpose only. Should you wish to use this application and/or customize it fo the purpose of your business please reach out to the developer at seppo.gigital@gmail.com.`
        // );

        // Left Container - Render product items
        this.renderProductItemsList(dataBase.productItems);

        // Get values to Sesstion Variables: 1-2
        // 1. Get cart items by sesstion user ID:
        sessionIdCart = this.getCartItemsByUserID(sessionId);
        console.log(
            `Cart items (sessionIdCart) for User ID ${sessionId}: `,
            sessionIdCart
        );

        // 2. Get orders list by user ID:
        sessionIdOrders = this.getOrdersByUserID(sessionId);
        console.log(
            `Orders History (sessionIdOrders) for User ID ${sessionId}: `,
            sessionIdOrders
        );

        // Right Container - Render Cart Summary
        this.renderCartAndOrdersSummary(sessionIdCart, sessionIdOrders);

        // Right Container - Render Cart Title

        // Right Container - Render Cart Icons

        // Right Container - Render Go-To-Cart Button

        // Right Container - Render Orders Title

        // Right Container - Render Order Links

        // Attach Event Listeners (Products)
        // Attach Event Listeners (Cart Icons)
        // Attach Event Listeners (Order Links)

        // TEST & TBS ITEMS

        this.attachEventListenrs();
    };

    // Clear container
    clearContainerLeft = () => {
        this.containerLeftNode.innerHTML = "";
    };

    clearContainerRight = () => {
        this.containerRightNode.innerHTML = "";
    };

    askForImageUrlFromStorage = async (imageName) => {
        const imageURL = await this.modelFirebase
            .getLinkToImage(imageName)
            .then((url) => {
                // console.log("The download URL is: ", url);
                return url;
            })
            .catch((error) => {
                console.log("Error getting download URL: ", error);
            });
        console.log("imageURL: ", imageURL);
    };

    getUrlByNameLocal = (imageName) => {
        return imageLinksMap.get(imageName);
    };

    getCartItemsByUserID = (sessionId) => {
        return dataBase.cartsData.filter((order) => order.userId === sessionId);
    };

    getOrdersByUserID = (sessionId) => {
        return dataBase.ordersData.filter(
            (order) => order.userId === sessionId
        );
    };

    getImageByProductId = (productId) => {
        const productObject = dataBase.productItems.filter(
            (product) => product.itemId === productId
        );

        // TEST-TBS - REMOVE IN PROD
        // console.log("productObject: ", productObject);
        // console.log("productObject[0].itemImg: ", productObject[0].itemImg);
        return productObject[0].itemImg;
    };

    getProdIdFromElementId = (idString) => {
        return idString.split("_")[1];
    };

    getProductObjectById = (productId) => {
        // Filter product array => single object array
        const filteredArray = dataBase.productItems.filter(
            (product) => product.docId === productId
        );
        // return object
        return filteredArray[0];
    };

    // Left Container - Render product items
    renderProductItemsList = (arrayProducts) => {
        const productItemsList = document.createElement("div");
        productItemsList.innerHTML = "";

        productItemsList.appendChild(
            this.viewProducts.createProductItemsList(arrayProducts)
        );
        // TEST-TBS - REMOVE FOR PROD
        // Reset global variable:
        // productsList.innerHTML = "";
        // productsList.appendChild(productItemsList);

        // TEST-TBS - REMOVE FOR PROD
        // console.log("productsList: ", productsList);
        // console.log("productsList: ", productsList.innerHTML);

        this.clearContainerLeft();
        this.containerLeftNode.appendChild(productItemsList);
    };

    // Left Container - Render Order CART
    renderCartSummary = (productObject) => {
        const productCardForCartHTML =
            this.viewCart.createProductCardForCart(productObject);
        this.clearContainerLeft();
        this.containerLeftNode.appendChild(productCardForCartHTML);
    };

    // TEST-TBS - REMOVE FOR PROD
    // Left Container - Re-Render product Items
    // returnRenderProductsList = () => {
    //     // TEST-TBS - REMOVE FOR PROD
    //     console.log("productsList: ", productsList.innerHTML);
    //     this.clearContainerLeft();
    //     this.containerLeftNode.appendChild(productsList);
    // };

    // Right Container - Render Cart (no price) and Orders Summaries

    renderCartAndOrdersSummary = (sessionIdCart, sessionIdOrders) => {
        const cartAndOrdersSummary = document.createElement("div");
        cartAndOrdersSummary.innerHTML = "";

        cartSummaryNoTotal.appendChild(
            this.viewCart.createNewCartSummaryNoTotal(sessionIdCart)
        );

        ordersHistorySummary.appendChild(
            this.viewOrders.createOrdersHistorySummary(sessionIdOrders)
        );

        // TEST-TBS - REMOVE IN PROD
        console.log("cartSummaryNoTotal: ", cartSummaryNoTotal);
        console.log("ordersHistorySummary: ", ordersHistorySummary);

        cartAndOrdersSummary.appendChild(cartSummaryNoTotal);
        cartAndOrdersSummary.appendChild(ordersHistorySummary);

        this.clearContainerRight();
        this.containerRightNode.appendChild(cartAndOrdersSummary);
    };

    renderProductCard = (productObject) => {
        const detailedCardHTML =
            this.viewProducts.createDetailedProductCard(productObject);
        this.clearContainerLeft();
        this.containerLeftNode.appendChild(detailedCardHTML);
    };

    handleButtonsClickLeft = (event) => {
        const target = event.target;

        // Detailed Product Card Page:
        // RETURN back to Products list BTN:
        if (target.classList.contains("goto-products-btn")) {
            this.renderProductItemsList(dataBase.productItems);
        }

        // Add to cart button (from inside the detailed card)
        // Get the closest parent with specific class name
        const addToCartBtn = target.closest(".product-card__add-to-cart-btn");
        // If checked:
        if (addToCartBtn) {
            console.log("TO-DO: Add product to cart.");
        }

        // MAIN PAGE - Product Items Cards
        // Check if require to add product to cart
        // (if the clicked element or any of its parent elements
        // have the class "product-item__content_price-btn")
        let currentElement = target;
        while (
            currentElement !== null &&
            !currentElement.classList.contains(
                "product-item__content_price-btn"
            )
        ) {
            currentElement = currentElement.parentElement;
        }

        if (currentElement !== null) {
            console.log("Button clicked");
            console.log("Button id: ", currentElement.id);
            // Identify Product to put add to cart
            const productIdToCart = this.getProdIdFromElementId(
                currentElement.id
            );
            // TO-DO:
            console.log(
                `TO-DO: Add product with ID ${productIdToCart} to cart.`
            );
            return;
        }

        // MAIN PAGE - Product Items Cards
        // Action call: Render if product card clicked
        // (Check if the clicked element or any of its parent elements have the class "product-item")
        currentElement = target;
        while (
            currentElement !== null &&
            !currentElement.classList.contains("product-item")
        ) {
            currentElement = currentElement.parentElement;
        }

        if (currentElement !== null) {
            console.log("Clicked inside product item");
            console.log("currentElement class: ", currentElement.classList);
            // Identify Product to display / render card
            const productIdToDisplay = this.getProdIdFromElementId(
                currentElement.id
            );
            console.log("Product ID to display: ", productIdToDisplay);
            const productToDisplay =
                this.getProductObjectById(productIdToDisplay);
            this.renderProductCard(productToDisplay);
        }
    };

    handleButtonsClickRight = (event) => {
        const target = event.target;
        // console.log("clicked element with class: ", target.classList);
        // console.log("clicked element with ID: ", target.id);

        if (target.classList.contains("cart-link-btn")) {
            console.log(
                "Received command to display PRODUCT CARD with ID: ",
                target.id
            );
        }

        if (target.classList.contains("order-number-btn")) {
            console.log(
                "Received command to display ORDER with ID: ",
                target.id
            );
        }

        // TO-DO
        // Display CART button (from right panel)
        // Get the closest parent with specific class name
        const addToCartBtn = target.closest(".cart-goto-btn");
        // If checked:
        if (addToCartBtn) {
            console.log("Received command to display CART.");
            this.renderCartSummary(dataBase.productItems[0]);
        }

        // if (target.classList.contains("")) {
        //     console.log("clicked element with class: ", target.classList)
        // }
    };

    attachEventListenrs = () => {
        this.containerLeftNode.addEventListener(
            "click",
            this.handleButtonsClickLeft
        );

        this.containerRightNode.addEventListener(
            "click",
            this.handleButtonsClickRight
        );
    };
}
