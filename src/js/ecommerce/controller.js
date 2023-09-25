import { ViewProducts } from "./view-products.js";
import { ViewCart } from "./view-cart.js";
import { ViewOrders } from "./view-orders.js";
import { ViewAdmin } from "./view-admin.js";
import { ViewSuperadmin } from "./view-superadmin.js";
import { ModelFirebase } from "../common/model-firebase.js";
import { ModelProducts } from "./model-products.js";
import { ModelCart } from "./model-cart.js";
import { ModelOrders } from "./model-orders.js";
import { ModelUser } from "./model-user.js";

// Get DB collection names (dbCollectionNames) from constants.js
import { dbCollectionNames } from "../common/constants.js";

// Init database instance (dataBase):
let dataBase = {};

// Init current session personal variables:
let sessionIdNumber = "";
let sessionIdUser = {};
let sessionIdCustomer = {};
let sessionIdOrders = [];
let sessionIdCart = [];
let sessionIdCartPrice = {
    items: 800000,
    handling: 8000,
    total: 808000,
};

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
        this.modelCart = new ModelCart(this);
        this.modelOrders = new ModelOrders();
        this.modelUser = new ModelUser();

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
        this.modelUser.checkModuleLinkage();

        // Get data from database (Firebase) and keep in dataBase{}
        console.log(
            "Action: Getdata from database (Firebase) and keep in dataBase{}."
        );

        for (const collectionName of dbCollectionNames) {
            dataBase[collectionName] = await this.modelFirebase.get(
                collectionName
            );
            console.log(
                `[*** dataBase.${collectionName} ***] :`,
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

        // Assign to sessionIdNumber a first ID from DB (usersData[0])
        sessionIdNumber = dataBase.usersData[0].userId;
        console.log("Assigned to [*** sessionIdNumber ***]: ", sessionIdNumber);

        // Assign to sessionIdUser a first element of the usersData[0]
        sessionIdUser = dataBase.usersData[0];
        console.log("[*** sessionIdUser ***] initiated: ", sessionIdUser);

        // Get sessionIdCustomer data by customer's ID
        this.getSessionIdCustomerData();
        console.log(
            "[*** sessionIdCustomer ***] initiated: ",
            sessionIdCustomer
        );

        // Alert - Popup inform the test name usage
        // This section was updated during last commit but failed to deploy
        // ACTION NEEDED: UNCOMMENT BELOW FOR PRODUCTION:
        // confirm(
        //     `Hi there, this application was set for demonstration purpose, therefore a User ID ${sessionIdNumber} was assigned for this session. Fake Name, Lastname, and other user properties are generated for practice purpose only. Should you wish to use this application and/or customize it fo the purpose of your business please reach out to the developer at seppo.gigital@gmail.com.`
        // );

        // Left Container - Render product items
        this.renderProductItemsList(dataBase.productItems);

        // Get values to Sesstion Variables: 1-2
        // 1. Get cart items by sesstion user ID:
        sessionIdCart = this.getCartItemsByUserID(sessionIdNumber);
        console.log(
            `Cart items [*** sessionIdCart ***] for User ID ${sessionIdNumber}: `,
            sessionIdCart
        );

        // 2. Get orders list by user ID:
        sessionIdOrders = this.getOrdersByUserID(sessionIdNumber);
        console.log(
            `Orders History [*** sessionIdOrders ***] for User ID ${sessionIdNumber}: `,
            sessionIdOrders
        );

        // Right Container - Render Cart Summary
        this.renderCartAndOrdersSummary(sessionIdCart, sessionIdOrders);

        this.attachEventListenrs();

        // TEST-TBS ONLY:
    };

    // Generate unique ID
    handleNewIdGeneration = () => {
        return this.modelFirebase.generateUniqueId();
    };

    // Get sessionIdCustomer data by customer's ID
    getSessionIdCustomerData = () => {
        sessionIdCustomer = this.modelUser.getSessionIdCustomerByCustomerId(
            sessionIdUser.custId,
            dataBase.customersData
        );
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

    deleteObjectFromArrayByDocId = (arrayData, docId) => {
        const index = arrayData.filter((object) => object.docId === docId);

        if (index !== -1) {
            arrayData.splice(index, 1);
            console.log("Deleted element/document with docId = ", docId);
        } else {
            console.log("Not found element/document with docId = ", docId);
        }
        return arrayData;
    };

    getUrlByNameLocal = (imageName) => {
        return imageLinksMap.get(imageName);
    };

    getCartItemsByUserID = (sessionIdNumber) => {
        return dataBase.cartsData.filter(
            (order) => order.userId === sessionIdNumber
        );
    };

    getOrdersByUserID = (sessionIdNumber) => {
        return dataBase.ordersData.filter(
            (order) => order.userId === sessionIdNumber
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
            (product) => product.itemId === productId
        );
        // return object
        return filteredArray[0];
    };

    getDocIdFromArrayByItemId = (array, itemId) => {
        const filteredArray = array.filter(
            (object) => object.itemId === itemId
        );
        // TEST-TBS - REMOVE FOR PROD
        console.log("[*** filteredArray ***]: ", filteredArray);
        if (filteredArray.length === 0) {
            return null;
        }
        return filteredArray[0].docId;
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
    renderCartSummary = (sessionIdCart) => {
        const productCardForCartHTML =
            this.viewCart.createCartPage(sessionIdCart);
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

        const cartItems =
            this.viewCart.createNewCartSummaryNoTotal(sessionIdCart);

        const ordersHistory =
            this.viewOrders.createOrdersHistorySummary(sessionIdOrders);

        // TEST-TBS - REMOVE IN PROD
        console.log("cartSummaryNoTotal: ", cartItems);
        console.log("ordersHistorySummary: ", ordersHistory);

        cartAndOrdersSummary.appendChild(cartItems);
        cartAndOrdersSummary.appendChild(ordersHistory);

        this.clearContainerRight();
        this.containerRightNode.appendChild(cartAndOrdersSummary);
    };

    // Right Container - Render Cart (with price)
    renderCartSummaryWithPrice = (sessionIdCart, sessionIdCartPrice) => {
        const cartSummaryWrapper = document.createElement("div");
        cartSummaryWrapper.innerHTML = "";

        const cartSummary = this.viewCart.createNewCartSummaryWithPrice(
            sessionIdCart,
            sessionIdCartPrice
        );

        cartSummaryWrapper.appendChild(cartSummary);

        // TEST-TBS - REMOVE IN PROD
        console.log("cart Summary with Total: ", cartSummaryWrapper);

        this.clearContainerRight();
        this.containerRightNode.appendChild(cartSummaryWrapper);
    };

    renderProductCard = (productObject) => {
        const detailedCardHTML =
            this.viewProducts.createDetailedProductCard(productObject);
        this.clearContainerLeft();
        this.containerLeftNode.appendChild(detailedCardHTML);
    };

    // Support funtions for buttons handler:

    // Handle click of complex element by picking it's parent element class
    findAncestorByClass = (element, className) => {
        let currentElement = element;
        while (
            currentElement &&
            !currentElement.classList.contains(className)
        ) {
            currentElement = currentElement.parentElement;
        }
        return currentElement;
    };

    // "< Back to Products" button
    handleGotoProductsBtn = () => {
        this.renderProductItemsList(dataBase.productItems);
        this.renderCartAndOrdersSummary(sessionIdCart, sessionIdOrders);
    };

    // "Add to Cart" button at detailed product card (page)
    handleAddToCartBtn = (element) => {
        const productIdToCart = this.getProdIdFromElementId(element.id);
        console.log(`TO-DO: Add product with ID ${productIdToCart} to cart.`);

        sessionIdCart = this.modelCart.addProductToCart(
            sessionIdCart,
            productIdToCart,
            sessionIdNumber
        );
        this.renderCartAndOrdersSummary(sessionIdCart, sessionIdOrders);
    };

    // "Go to Cart" button at right panel
    handleGotoCartBtn = () => {
        console.log("Received command to display CART.");
        // TEST-TBD
        this.modelCart.updateCartPriceVariable(
            sessionIdCart,
            sessionIdCartPrice,
            dataBase.productItems,
            sessionIdCustomer.custHandlingFee
        );
        this.renderCartSummary(sessionIdCart);
        this.renderCartSummaryWithPrice(sessionIdCart, sessionIdCartPrice);
    };

    // "Proceed to checkout" button at right panel
    handleProceedToCheckoutBtn = () => {
        console.log("Received command PROCEED TO CHECKOUT");
    };

    // Product card as "button" at main page
    handleProductItem = (element) => {
        // TEST-TBS REMOVE IN PROD
        console.log("Display CARD for product ID: ", element.id);

        const productIdToDisplay = this.getProdIdFromElementId(element.id);
        const productToDisplay = this.getProductObjectById(productIdToDisplay);
        this.renderProductCard(productToDisplay);
        this.renderCartAndOrdersSummary(sessionIdCart, sessionIdOrders);
    };

    handleDisplayHistoricalOrder = (element) => {
        // TEST-TBS REMOVE IN PROD
        console.log("Display ORDER with ID: ", element.id);
    };

    handleQtyChangeBtn = (elementDOM, sessionIdCart, changeValue) => {
        // TEST-TBS REMOVE IN PROD
        console.log("Deduct qty for product ID: ", elementDOM.id);
        console.log("sessionIdCart: ", sessionIdCart);
        const itemId = this.getProdIdFromElementId(elementDOM.id);
        // TEST-TBS REMOVE IN PROD
        console.log("itemId: ", itemId);
        sessionIdCart = this.modelCart.changeQtyInCart(
            sessionIdCart,
            itemId,
            changeValue
        );
        // TEST-TBS REMOVE IN PROD
        console.log("sessionIdCart: ", sessionIdCart);
        sessionIdCartPrice = this.modelCart.updateCartPriceVariable(
            sessionIdCart,
            sessionIdCartPrice,
            dataBase.productItems,
            sessionIdCustomer.custHandlingFee
        );
    };

    handleViewOfPartQty = (itemId, newQty) => {
        // TEST-TBS REMOVE IN PROD
        console.log("Got comand to update product qty with:");
        console.log("Product ID: ", itemId);
        console.log("New QTY: ", newQty);

        const productObject = this.getProductObjectById(itemId);
        this.viewCart.updatePartQuantity(productObject, newQty);
    };

    handleViewOfTotalPrceInCart = (newPrice) => {
        this.viewCart.updateTotalPrice(newPrice);
    };

    handleButtonsClickLeft = (event) => {
        const target = event.target;

        // "< Back to Products" button
        if (target.classList.contains("goto-products-btn")) {
            this.handleGotoProductsBtn();
            return;
        }

        // "Add to Cart" button at detailed product card (page)
        const addToCartBtn = target.closest(".product-card__add-to-cart-btn");
        if (addToCartBtn) {
            this.handleAddToCartBtn(addToCartBtn);
            return;
        }

        // "Add to Cart" button at short product card (main page)
        const priceBtnElement = this.findAncestorByClass(
            target,
            "product-item__content_price-btn"
        );
        if (priceBtnElement) {
            this.handleAddToCartBtn(priceBtnElement);
            return;
        }

        // Product card as "button" at main page
        const productItemElement = this.findAncestorByClass(
            target,
            "product-item"
        );
        if (productItemElement) {
            this.handleProductItem(productItemElement);
        }

        // Qty deduct button at Cart page
        if (target.classList.contains("cart-element__qty-mod_deduct-btn")) {
            this.handleQtyChangeBtn(target, sessionIdCart, -1);
            return;
        }

        // Qty add button at Cart page
        if (target.classList.contains("cart-element__qty-mod_add-btn")) {
            this.handleQtyChangeBtn(target, sessionIdCart, 1);
            return;
        }
    };

    handleButtonsClickRight = (event) => {
        const target = event.target;
        // console.log("clicked element with class: ", target.classList);
        // console.log("clicked element with ID: ", target.id);

        // Product card as "button" at right panel
        if (target.classList.contains("cart-link-btn")) {
            this.handleProductItem(target);
        }

        // History order number as "button" at right panel
        if (target.classList.contains("order-number-btn")) {
            this.handleDisplayHistoricalOrder(target);
        }

        // "Go to cart" button at right panel
        const goToCartBtn = this.findAncestorByClass(target, "cart-goto-btn");
        // Alternative command:
        // const goToCartBtn = target.closest(".cart-goto-btn");
        if (goToCartBtn) {
            this.handleGotoCartBtn(sessionIdCart);
        }

        // "Proceed to checkout" button at right panel
        const proceedToCheckoutBtn = this.findAncestorByClass(
            target,
            "cart-checkout-btn"
        );
        if (proceedToCheckoutBtn) {
            // TO-DO
            this.handleProceedToCheckoutBtn();
        }
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

    // Database support functions
    handleAddDocToFirestore = (collectionName, documentObject) => {
        console.log(
            `Controller: got a requst to add [object]: ${documentObject} to [collction]: ${collectionName}`
        );
        this.modelFirebase.addDocToFirestore(collectionName, documentObject);
    };

    handleUpdateDocInFirestore = (collectionName, documentObject) => {
        console.log(
            `Controller: got a requst update [object]: ${documentObject} in [collction]: ${collectionName}`
        );
        this.modelFirebase.updateDocInFirestore(collectionName, documentObject);
    };

    handleDeleteDocFromFirestore = (collectionName, documentId) => {
        console.log(
            `Controller: got a requst to delete [object]: ${documentId} from [collction]: ${collectionName}`
        );
        this.modelFirebase.deleteDocFromFirestore(collectionName, documentId);
    };
}
