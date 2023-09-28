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

// Initiate CURRENT SESSION VARIABLES:
let sessionIdNumber = "";
let sessionIdUser = {};
let sessionIdCustomer = {};
let sessionIdOrders = [];
let sessionIdCart = [];
let sessionIdCartPrice = {
    // items: 800000,
    // handling: 8000,
    // total: 808000,
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

        // Assign to sessionIdNumber a userId of the first user object/document from DB (usersData[0].userId)
        sessionIdNumber = dataBase.usersData[0].userId;
        console.log("Assigned to [*** sessionIdNumber ***]: ", sessionIdNumber);

        // Assign to sessionIdUser a first object/document from DB (usersData[0])
        sessionIdUser = dataBase.usersData[0];
        console.log("[*** sessionIdUser ***] initiated: ", sessionIdUser);

        // Assign to sessionIdCustomer an object/document associated with sesstionIdUser (by userId)
        sessionIdCustomer = this.getSessionIdCustomerData();
        console.log(
            "[*** sessionIdCustomer ***] initiated: ",
            sessionIdCustomer
        );

        // Get values to CURRENT SESSION VARIABLES
        // 1. Set "sessionIdCart" by sesstion's userId (sessionIdNumber):
        sessionIdCart = this.getCartItemsByUserID(sessionIdNumber);
        console.log(
            `Cart items [*** sessionIdCart ***] for User ID ${sessionIdNumber}: `,
            sessionIdCart
        );

        // 2. Set "sessionIdOrders" by sesstion's userId (sessionIdNumber):
        sessionIdOrders = this.getOrdersByUserID(sessionIdNumber);
        console.log(
            `Orders History [*** sessionIdOrders ***] for User ID ${sessionIdNumber}: `,
            sessionIdOrders
        );

        // ALERT - POPOUP DISCLAMER
        // *** ACTION NEEDED ***: UNCOMMENT FOR PROD
        // confirm(
        //     `Hi there, this application was set for demonstration purpose, therefore a User ID ${sessionIdNumber} was assigned for this session. Fake Name, Lastname, and other user properties are generated for practice purpose only. Should you wish to use this application and/or customize it fo the purpose of your business please reach out to the developer at seppo.gigital@gmail.com.`
        // );

        // Left Container - Render product items
        this.renderProductItemsList(dataBase.productItems);

        // Right Container - Render Cart Summary
        this.renderCartAndOrdersSummary(sessionIdCart, sessionIdOrders);

        this.attachEventListenrs();

        // TEST-TBS ONLY:
    };

    // TO-DO: check where it is used?
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

    // Generate unique ID
    handleNewIdGeneration = () => {
        return this.modelFirebase.generateUniqueId();
    };

    // Clear container
    clearContainerLeft = () => {
        this.containerLeftNode.innerHTML = "";
    };

    clearContainerRight = () => {
        this.containerRightNode.innerHTML = "";
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

    // Assign to sessionIdCustomer an object/document associated with sesstionIdUser (by userId)
    getSessionIdCustomerData = () => {
        sessionIdCustomer = this.modelUser.getSessionIdCustomerByCustomerId(
            sessionIdUser.custId,
            dataBase.customersData
        );
        return sessionIdCustomer;
    };

    // Revert back from map an image URL by image name
    getUrlByNameLocal = (imageName) => {
        return imageLinksMap.get(imageName);
    };

    // Set "sessionIdCart" by sesstion's userId (sessionIdNumber):
    getCartItemsByUserID = (sessionIdNumber) => {
        return dataBase.cartsData.filter(
            (order) => order.userId === sessionIdNumber
        );
    };

    // Set "sessionIdOrders" by sesstion's userId (sessionIdNumber):
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

    // Get product/object from "dataBase.productItems" product ID (itemId):
    getProductObjectById = (productId) => {
        // Filter product array => single object array
        const filteredArray = dataBase.productItems.filter(
            (product) => product.itemId === productId
        );
        if (filteredArray.length === 0) {
            return null;
        }
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

    callToUpdateCartPriceVariable = () => {
        console.log("Received command to call for Price Variable update");
        // TEST-TBD
        this.updateCartPriceVariable(
            sessionIdCart,
            sessionIdCartPrice,
            dataBase.productItems,
            sessionIdCustomer.custHandlingFee
        );
    };

    // MIGHT BE A PART OF MODEL:
    updateCartPriceVariable = (
        sessionIdCart,
        sessionIdCartPrice,
        productItems,
        handlingRate
    ) => {
        let newItemsPrice = 0;
        let newHandlingFee = 0;

        // TO-DO: CHECK, if it is required here. Delete for now:
        console.log("MODEL - [*** sessionIdCart ***]: ", sessionIdCart);
        console.log(
            "MODEL - [*** sessionIdCartPrice ***]: ",
            sessionIdCartPrice
        );
        console.log(
            "MODEL - [*** dataBase.productItems ***]: ",
            dataBase.productItems
        );
        console.log("MODEL - [*** sessionIdCustome ***]: ", sessionIdCustomer);

        for (const item of sessionIdCart) {
            newItemsPrice +=
                item.qty *
                this.modelCart.getPriceByProductId(productItems, item.itemId);
        }

        newHandlingFee = newItemsPrice * handlingRate;

        sessionIdCartPrice.items = newItemsPrice;
        sessionIdCartPrice.handling = newHandlingFee;
        sessionIdCartPrice.total = newItemsPrice + newHandlingFee;

        console.log("new sessionIdCartPrice: ", sessionIdCartPrice);
        console.log("for sessionIdCart: ", sessionIdCart);

        // TO-DO: CHECK, if it is required here. Delete for now:
        // this.controller.handleViewOfTotalPrceInCart(sessionIdCartPrice.total);
        return sessionIdCartPrice;
    };

    // handleChangeQtyInCart = (sessionIdCart, itemId, adder) => {
    //     // TEST-TBS REMOVE IN PROD
    //     console.log("sessionIdCart: ", sessionIdCart);
    //     for (const product of sessionIdCart) {
    //         if (product.itemId === itemId) {
    //             if (product.qty + adder > 0) {
    //                 product.qty += adder;
    //                 console.log(
    //                     "MODEL: try to update in sessionIdCart a [*** product *** ]: ",
    //                     product
    //                 );
    //                 this.handleUpdateDocInFirestore("cartsData", product);

    //                 // TO-DO: CHECK, if it is required here. Delete for now:
    //                 this.handleViewOfPartQty(itemId, product.qty);
    //                 this.callToUpdateCartPriceVariable();
    //                 this.handleViewOfTotalPrceInCart(sessionIdCartPrice.total);
    //             } else {
    //                 confirm("Hi there, do you like to delete item from cart?");
    //                 // Get docId by itemId
    //                 const docId = this.getDocIdFromArrayByItemId(
    //                     sessionIdCart,
    //                     itemId
    //                 );
    //                 console.log(
    //                     `MODEL: TRY TO DELETE PRODUCT WITH DocID ${docId} from database.cartsData`
    //                 );
    //                 this.handleDeleteDocFromFirestore("cartsData", docId);
    //                 // Delete object element with docId from array:
    //                 sessionIdCart = this.deleteObjectFromArrayByDocId(
    //                     sessionIdCart,
    //                     docId
    //                 );

    //                 // TO-DO: CHECK, if it is required here. Delete for now:
    //                 this.handleGotoCartBtn();
    //             }
    //         }
    //     }
    //     return sessionIdCart;
    // };

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
        // TO-DO: CHECK, if it is required here. Delete for now:
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
        this.updateCartPriceVariable(
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

        // TO-DO: CHECK, if it is required here. Delete for now:
        // this.renderCartAndOrdersSummary(sessionIdCart, sessionIdOrders);
    };

    // TO-DO: Create ORDER POP UP:
    handleDisplayHistoricalOrder = (element) => {
        // TEST-TBS REMOVE IN PROD
        console.log("Display ORDER with ID: ", element.id);
    };

    handleQtyChangeBtn = (elementDOM, adder) => {
        const itemId = this.getProdIdFromElementId(elementDOM.id);
        // TEST-TBS REMOVE IN PROD
        console.log(
            "Function: 'handleQtyChangeBtn()': update QTY of prod ID: ",
            elementDOM.id
        );
        console.log("'sessionIdCart': ", sessionIdCart);
        console.log("itemId: ", itemId);

        // product/object to update:
        const productToUpdate = JSON.parse(
            JSON.stringify(
                sessionIdCart.find((product) => product.itemId === itemId)
            )
        );

        if (!productToUpdate) {
            console.log("Product/object not found");
            return;
        }

        // remove product from array:

        const filteredSessionIdCart = sessionIdCart.filter(
            (product) => product.itemId !== itemId
        );

        if (productToUpdate.qty + adder > 0) {
            this.updateProduct(filteredSessionIdCart, productToUpdate, adder);
        } else {
            this.deleteProduct(filteredSessionIdCart, productToUpdate);
        }

        this.updateCartDOM();

        // // DELETE EVERYTHING BELOW:
        // // Loop to find a product/object with selected "itemId"
        // for (const product of sessionIdCart) {
        //     if (product.itemId === itemId) {
        //         // if result of adding "adder" ('1' or '-1') is above '0', update 'qty' everywhere
        //         if (product.qty + adder > 0) {
        //             //  change 'qty'property of 'sessionIdCart' product/object (global variable)
        //             product.qty += adder;
        //             console.log(
        //                 "MODEL: try to update in sessionIdCart a [*** product *** ]: ",
        //                 product
        //                 );
        //             //  try to change 'qty' property of affected product/document in Firestore (async function)
        //             this.handleUpdateDocInFirestore("cartsData", product);

        //             //  update/re-render 'qty' in user's cart (DOM)
        //             this.handleViewOfPartQty(itemId, product.qty);
        //             //  update total price 'sessionIdCartPrice' (global variable)
        //             this.callToUpdateCartPriceVariable();
        //             //  update/re-render 'total price' in user's cart (DOM)
        //             this.handleViewOfTotalPrceInCart(sessionIdCartPrice.total);
        //         } else {
        //             // if result of adding "adder" ('1' or '-1') is '0' or below, delete product/object from everywhere
        //             confirm("Hi there, do you like to delete item from cart?");
        //             // Get docId by itemId
        //             const docId = this.getDocIdFromArrayByItemId(
        //                 sessionIdCart,
        //                 itemId
        //             );
        //             console.log(
        //                 `MODEL: TRY TO DELETE PRODUCT WITH DocID ${docId} from database.cartsData`
        //                 );
        //                 // try to delete delete product/object from Firestore (async function)
        //                 this.handleDeleteDocFromFirestore("cartsData", docId);
        //                 // Delete object element with docId from 'sessionIdCart' product/object (global variable)
        //                 sessionIdCart = this.deleteObjectFromArrayByDocId(
        //                     sessionIdCart,
        //                 docId
        //                 );

        //             // Re-render Cart and Cart summary in user's DOM
        //             this.handleGotoCartBtn();
        //         }
        //     }
        // }
        // return sessionIdCart;
    };

    updateProduct(filteredSessionIdCart, productToUpdate, adder) {
        // Modify product/object
        productToUpdate.qty += adder;

        // Add product back to array
        filteredSessionIdCart.push(productToUpdate);

        // Update Firestore
        this.handleUpdateDocInFirestore("cartsData", productToUpdate);

        // Update global variable
        sessionIdCart = filteredSessionIdCart;
    }

    deleteProduct(filteredSessionIdCart, productToUpdate) {
        // Delete product from Firestore
        this.handleDeleteDocFromFirestore("cartsData", productToUpdate.docId);

        // Update global variable
        sessionIdCart = filteredSessionIdCart;
    }

    updateCartDOM() {
        this.handleGotoCartBtn();
    }

    // Update product QTY in CART in 2 locations: price and selector
    handleViewOfPartQty = (itemId, newQty) => {
        // TEST-TBS REMOVE IN PROD
        console.log("Got comand to update product qty with:");
        console.log("Product ID: ", itemId);
        console.log("New QTY: ", newQty);

        const productObject = this.getProductObjectById(itemId);
        this.viewCart.updatePartQuantity(productObject, newQty);
    };

    // Update total price (items + handling) in menu (right container)
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
            this.handleQtyChangeBtn(target, -1);
            return;
        }

        // Qty add button at Cart page
        if (target.classList.contains("cart-element__qty-mod_add-btn")) {
            this.handleQtyChangeBtn(target, 1);
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
            "Controller: got a requst to add [object]: ",
            documentObject
        );
        console.log("to [collction]: ", collectionName);
        this.modelFirebase.addDocToFirestore(collectionName, documentObject);
    };

    handleUpdateDocInFirestore = (collectionName, documentObject) => {
        console.log(
            "Controller: got a requst update [object]: ",
            documentObject
        );
        console.log("in [collction]: ", collectionName);
        this.modelFirebase.updateDocInFirestore(collectionName, documentObject);
    };

    handleDeleteDocFromFirestore = (collectionName, documentId) => {
        console.log(
            "Controller: got a requst to delete [object]: ",
            documentId
        );
        console.log("from [collection]: ", collectionName);
        this.modelFirebase.deleteDocFromFirestore(collectionName, documentId);
    };
}
