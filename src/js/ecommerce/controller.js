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
import {
    dbCollectionNames,
    paymentMethods,
    welcomeDisclaimer,
    errorInsufficientPermission,
    errorEmptyCart,
    messageArrayTest,
} from "../common/constants.js";

// Init database instance (dataBase):
let dataBase = {};

// Initiate CURRENT SESSION VARIABLES:
let sessionIdNumber = "";
let sessionIdUser = {};
let sessionIdCustomer = {};
let sessionIdOrders = [];
let sessionIdCartItems = [];
let sessionIdCartPrice = {
    // priceItems: 800000,
    // priceHandling: 8000,
    // priceTotal: 808000,
};

let sessionIdCartDetails = {
    // userId: "1001",
    // userName: "Mattew Yampolski",
    // userEmail: "matt.y@aerosupplyplus.aero",
    // userPhone: "+1 898 9289289",
    // custId: "c001",
    // custLegalName: "AeroSupplyPlus LLC",
    // custBillToAddress: "2023, Cactus Road, Springdale, FL, 33761 USA",
    // custHandlingFee: 1,
};

// TO-DO: MOVE TO CONSTANTS
const POPUP_OPEN_CLASSNAME = "popup-container-open";
const BODY_FIXED_CLASSNAME = "body-fixed";

// let newOrderDetails = {
//     // userId: "1001",
//     // userName: "Mattew Yampolski",
//     // userEmail: "matt.y@aerosupplyplus.aero",
//     // userPhone: "+1 898 9289289",
//     // custId: "c001",
//     // custLegalName: "AeroSupplyPlus LLC",
//     // custBillToAddress: "2023, Cactus Road, Springdale, FL, 33761 USA",
//     // custHandlingFee: 1,
//     // priceItems: 800000,
//     // priceHandling: 8000,
//     // priceTotal: 808000,
//     // orderCurrency: "$",
//     // paymentMethod: "card",
//     // orderId: "100005",
//     // orderDate: "20230828",
//     // paymentDate: "20230828",
//     // docId: "iuyreqouoqoiwyiuyorqwriuyqeoiuyrw",
// };

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

        this.bodyNode = document.querySelector("body");
        this.containerLeftNode = document.getElementById("containerLeft");
        this.containerRightNode = document.getElementById("containerRight");
        this.containerPupupNode = document.getElementById("containerPupup");
        this.popupContentNode = document.getElementById("popupContent");
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

        // Get data from database (Firebase) and keep in local dataBase{}
        await this.getUpdateLocalDataBase();

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

        // RUN DISCLAIMER FIRST
        this.activatePopupWelcomeDisclaimer();

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
        // 1. Set "sessionIdCartItems" by sesstion's userId (sessionIdNumber):
        sessionIdCartItems = this.getCartItemsByUserID(sessionIdNumber);
        console.log(
            `[*** sessionIdCartItems ***] for User ID ${sessionIdNumber}: `,
            sessionIdCartItems
        );

        // 2. Set "sessionIdOrders" by sesstion's userId (sessionIdNumber):
        sessionIdOrders = this.getOrdersByUserID(sessionIdNumber);
        console.log(
            `[*** sessionIdOrders ***] for User ID ${sessionIdNumber}: `,
            sessionIdOrders
        );

        // 3. Set "sessionIdCartDetails":
        sessionIdCartDetails = this.getSessionIdCartDetails();
        console.log(
            `[*** sessionIdCartDetails ***] for User ID ${sessionIdNumber}: `,
            sessionIdCartDetails
        );

        // ALERT - POPOUP DISCLAIMER
        // *** ACTION NEEDED ***: UNCOMMENT FOR PROD
        // confirm(
        //     `Hi there, this application was set for demonstration purpose, therefore a User ID ${sessionIdNumber} was assigned for this session. Fake Name, Lastname, and other user properties are generated for practice purpose only. Should you wish to use this application and/or customize it fo the purpose of your business please reach out to the developer at seppo.gigital@gmail.com.`
        // );

        // Left Container - Render product items
        this.renderProductItemsList(dataBase.productItems);

        // Right Container - Render Cart Summary
        this.renderCartAndOrdersSummary(sessionIdCartItems, sessionIdOrders);

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

    // Get or Update data from Firebase and keep in local dataBase{}.
    getUpdateLocalDataBase = async () => {
        console.log(
            "Get or Update data from Firebase and keep in local dataBase{}."
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

    // Set "sessionIdCartDetails":
    getSessionIdCartDetails = () => {
        const updatedSessionIdCartDetails = {
            userId: sessionIdUser.userId,
            userName: sessionIdUser.userName,
            userEmail: sessionIdUser.userEmail,
            userPhone: sessionIdUser.userPhone,
            custId: sessionIdCustomer.custId,
            custLegalName: sessionIdCustomer.custLegalName,
            custBillToAddress: sessionIdCustomer.custBillToAddress,
            custHandlingFee: sessionIdCustomer.custHandlingFee,
            paymentMethod: sessionIdCustomer.paymentMethod,
        };
        return updatedSessionIdCartDetails;
    };

    // Reset Session Cart Items (when order placed)
    resetSessionIdCartItems = () => {
        sessionIdCartItems = [];
    };

    // Revert back from map an image URL by image name
    getUrlByNameLocal = (imageName) => {
        return imageLinksMap.get(imageName);
    };

    // Set "sessionIdCartItems" by sesstion's userId (sessionIdNumber):
    getCartItemsByUserID = (sessionIdNumber) => {
        return dataBase.cartsData.filter(
            (order) => order.userId === sessionIdNumber
        );
    };

    // Set "sessionIdOrders" by sesstion's userId (sessionIdNumber):
    // getOrdersByUserID = (sessionIdNumber) => {
    //     return dataBase.ordersData.filter(
    //         (order) => order.userId === sessionIdNumber
    //     );
    // };

    // New version:
    getOrdersByUserID = (sessionIdNumber) => {
        return dataBase.ordersData
            .filter((order) => order.userId === sessionIdNumber)
            .sort((a, b) => a.orderDate - b.orderDate);
    };

    // Get "orderDetailsToDisplay" by orderNumber:
    getOrderDetailsToDisplay = (orderNumber) => {
        return dataBase.ordersData.filter(
            (order) => order.orderId === orderNumber
        )[0];
    };

    // Get "orderItemsToDisplay" by orderNumber:
    getOrderItemsToDisplay = (orderNumber) => {
        return dataBase.orderItemsData.filter(
            (order) => order.orderId === orderNumber
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

    getPriceByProductId = (productItems, productId) => {
        const productById = productItems.filter(
            (product) => product.itemId === productId
        );
        // console.log("productById: ", productById);
        // console.log("productById[0]: ", productById[0]);
        return productById[0].itemPrice;
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
            sessionIdCartItems,
            sessionIdCartPrice,
            dataBase.productItems,
            sessionIdCustomer.custHandlingFee
        );
    };

    // MIGHT BE A PART OF MODEL:
    updateCartPriceVariable = (
        sessionIdCartItems,
        sessionIdCartPrice,
        productItems,
        handlingRate
    ) => {
        let newItemsPrice = 0;
        let newHandlingFee = 0;

        // TO-DO: CHECK, if it is required here. Delete for now:
        console.log(
            "MODEL - [*** sessionIdCartItems ***]: ",
            sessionIdCartItems
        );
        console.log(
            "MODEL - [*** sessionIdCartPrice ***]: ",
            sessionIdCartPrice
        );
        console.log(
            "MODEL - [*** dataBase.productItems ***]: ",
            dataBase.productItems
        );
        console.log("MODEL - [*** sessionIdCustome ***]: ", sessionIdCustomer);

        for (const item of sessionIdCartItems) {
            newItemsPrice +=
                item.qty * this.getPriceByProductId(productItems, item.itemId);
        }

        newHandlingFee = (newItemsPrice * handlingRate) / 100;

        sessionIdCartPrice.priceItems = newItemsPrice;
        sessionIdCartPrice.priceHandling = newHandlingFee;
        sessionIdCartPrice.priceTotal = newItemsPrice + newHandlingFee;

        console.log("new sessionIdCartPrice: ", sessionIdCartPrice);
        console.log("for sessionIdCartItems: ", sessionIdCartItems);

        // TO-DO: CHECK, if it is required here. Delete for now:
        // this.controller.handleViewOfTotalPrceInCart(sessionIdCartPrice.priceTotal);
        return sessionIdCartPrice;
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
    renderCartSummary = (sessionIdCartItems) => {
        let productCardForCartHTML;
        if (sessionIdCartItems.length === 0) {
            productCardForCartHTML =
                this.viewCart.createEmptyCartPage(sessionIdCartItems);
        } else {
            productCardForCartHTML =
                this.viewCart.createCartPage(sessionIdCartItems);
        }

        this.clearContainerLeft();
        this.containerLeftNode.appendChild(productCardForCartHTML);
    };

    // Left Container - Render Product Card
    renderProductCard = (productObject) => {
        const detailedCardHTML =
            this.viewProducts.createDetailedProductCard(productObject);
        this.clearContainerLeft();
        this.containerLeftNode.appendChild(detailedCardHTML);
    };

    // Right Container - Render Cart (no price) and Orders Summaries
    renderCartAndOrdersSummary = (sessionIdCartItems, sessionIdOrders) => {
        const cartAndOrdersSummary = document.createElement("div");
        cartAndOrdersSummary.innerHTML = "";

        const cartItems =
            this.viewCart.createNewCartSummaryNoTotal(sessionIdCartItems);

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
    renderCartSummaryWithPrice = (sessionIdCartItems, sessionIdCartPrice) => {
        const cartSummaryWrapper = document.createElement("div");
        cartSummaryWrapper.innerHTML = "";

        const cartSummary = this.viewCart.createNewCartSummaryWithPrice(
            sessionIdCartItems,
            sessionIdCartPrice
        );

        cartSummaryWrapper.appendChild(cartSummary);

        // TEST-TBS - REMOVE IN PROD
        console.log("cart Summary with Total: ", cartSummaryWrapper);

        this.clearContainerRight();
        this.containerRightNode.appendChild(cartSummaryWrapper);
    };

    // Left Container - Render Checkout Panel
    renderCheckOutPanel = () => {
        this.clearContainerLeft();

        const checkOutWrapper = this.viewOrders.createCheckOutWrapper();

        // Second argument ("true") is to create "Update" button
        checkOutWrapper.appendChild(
            this.viewOrders.createBillToAddressContentBlock(
                sessionIdCartDetails,
                true
            )
        );

        // Second argument ("true") is to create "Update" button
        checkOutWrapper.appendChild(
            this.viewOrders.createPaymentMethodContentBlock(
                sessionIdCartDetails,
                true,
                paymentMethods
            )
        );

        const checkOutCartWrapper = this.viewOrders.createCheckOutCartWrapper();

        const cartItems = document.createElement("div");
        cartItems.classList = "checkout-cart-items";

        for (const productItem of sessionIdCartItems) {
            const productData = this.getProductObjectById(productItem.itemId);
            // Third argument ("checkout-cart-item") is a classList to pass to 'div' element
            // Fourth argument ("true") is for not to create a "qty update" feature
            cartItems.appendChild(
                this.viewCart.createProductCardForCart(
                    productData,
                    productItem.qty,
                    "checkout-cart-item",
                    false
                )
            );
        }

        checkOutCartWrapper.appendChild(cartItems);

        checkOutCartWrapper.appendChild(
            this.viewOrders.createUpdateButtonBlock()
        );

        checkOutWrapper.appendChild(checkOutCartWrapper);

        this.containerLeftNode.appendChild(checkOutWrapper);
    };

    // Left Container - Render Order Panel
    renderOrderPanel = (orderDetailsToDisplay, orderItemsToDisplay) => {
        this.clearContainerLeft();

        const orderWrapper = this.viewOrders.createOrderWrapper(
            orderDetailsToDisplay
        );

        // Second argument ("false") is to DO NOT create "Update" button
        orderWrapper.appendChild(
            this.viewOrders.createBillToAddressContentBlock(
                orderDetailsToDisplay,
                false
            )
        );

        // Second argument ("false") is to DO NOT create "Update" button
        orderWrapper.appendChild(
            this.viewOrders.createPaymentMethodContentBlock(
                orderDetailsToDisplay,
                false,
                paymentMethods
            )
        );

        const orderCartWrapper = this.viewOrders.createCheckOutCartWrapper();

        const cartItems = document.createElement("div");
        cartItems.classList = "checkout-cart-items";

        for (const productItem of orderItemsToDisplay) {
            const productData = this.getProductObjectById(productItem.itemId);
            // Third argument ("checkout-cart-item") is a classList to pass to 'div' element
            // Fourth argument ("true") is for not to create a "qty update" feature
            cartItems.appendChild(
                this.viewCart.createProductCardForCart(
                    productData,
                    productItem.qty,
                    "checkout-cart-item",
                    false
                )
            );
        }

        orderCartWrapper.appendChild(cartItems);

        // orderCartWrapper.appendChild(this.viewOrders.createUpdateButtonBlock());

        orderWrapper.appendChild(orderCartWrapper);

        this.containerLeftNode.appendChild(orderWrapper);
    };

    // Right Container - Render Checkout Price Panel
    renderCheckOutPricePanel = () => {
        this.clearContainerRight();
        this.containerRightNode.appendChild(
            // Second argument ("true") is to create "Place Order" button
            this.viewOrders.createOrderSummaryPriceBlock(
                sessionIdCartPrice,
                true
            )
        );
    };

    // Right Container - Render Order Price Panel
    renderOrderPricePanel = (orderDetailsToDisplay) => {
        this.clearContainerRight();
        this.containerRightNode.appendChild(
            // Second argument ("false") is to NOT TO create "Place Order" button
            this.viewOrders.createOrderSummaryPriceBlock(
                orderDetailsToDisplay,
                false
            )
        );
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
        this.renderCartAndOrdersSummary(sessionIdCartItems, sessionIdOrders);
    };

    // "Add to Cart" button at detailed product card (page)
    handleAddToCartBtn = (element) => {
        // TEST-TBS REMOVE IN PROD
        console.log(`TO-DO: Add product with ID ${element.id} to cart.`);
        // Get product/object ID (itemId) from DOM element ID (string)
        const itemId = this.getProdIdFromElementId(element.id);

        // Check if product already in user's cart
        const isInTheCart = this.getDocIdFromArrayByItemId(
            sessionIdCartItems,
            itemId
        );

        if (isInTheCart) {
            this.handleQtyChangeBtn(element, 1);
        } else {
            this.addProduct(itemId, sessionIdNumber);
        }

        this.renderCartAndOrdersSummary(sessionIdCartItems, sessionIdOrders);
    };

    // "Go to Cart" button at right panel or checkout panel
    handleGotoCartBtn = () => {
        // TEST-TBS REMOVE IN PROD
        console.log("Received command to display CART.");
        this.updateCartPriceVariable(
            sessionIdCartItems,
            sessionIdCartPrice,
            dataBase.productItems,
            sessionIdCustomer.custHandlingFee
        );
        this.renderCartSummary(sessionIdCartItems);
        this.renderCartSummaryWithPrice(sessionIdCartItems, sessionIdCartPrice);
    };

    // Handle Order Placement
    handleOrderPlacement = async () => {
        // TEST-TBS REMOVE IN PROD
        console.log("Received command to PLACE ORDER (HANDLER CONNECTED).");

        if (sessionIdCartPrice.priceTotal === 0) {
            this.activatePopupMessage(errorEmptyCart);
            return;
        }

        // 1.A. Prepare newOrderDetails to pass to Firestore
        const newOrderDetails = JSON.parse(
            JSON.stringify(
                this.modelFirebase.setNewOrderDetails(
                    sessionIdCartDetails,
                    sessionIdCartPrice
                )
            )
        );

        // TEST-TBS REMOVE IN PROD
        console.log("[*** newOrderDetails ***] set: ", newOrderDetails);

        // 1.B. Pass newOrderDetails to Firestore
        try {
            this.handleAddDocToFirestore("ordersData", newOrderDetails);
        } catch (error) {
            console.error("Error adding newOrderDetails to Firestore: ", error);
        }

        // 1.C. Push newOrderDetails to dataBase.ordersData
        // dataBase.ordersData.push(newOrderDetails);

        // 2.A. Prepare newOrderItems to pass to Firestore
        const newOrderItems = JSON.parse(JSON.stringify(sessionIdCartItems));
        const newOrderId = JSON.parse(JSON.stringify(newOrderDetails.orderId));

        // TEST-TBS REMOVE IN PROD
        console.log("[*** newOrderItems ***] set: ", newOrderItems);
        for (const productItem in newOrderItems) {
            newOrderItems[productItem].orderId = newOrderId;

            console.log(
                "[*** productItem ***] set: ",
                newOrderItems[productItem]
            );
            // 2.B. Pass productItem to Firestore
            try {
                this.handleAddDocToFirestore(
                    "orderItemsData",
                    newOrderItems[productItem]
                );
            } catch (error) {
                console.error("Error adding productItem to Firestore: ", error);
            }

            // 2.C. Push productItem to dataBase.orderItemsData
            // dataBase.orderItemsData.push(newOrderItems[productItem]);
        }

        // 3.A. Clear sessionIdCartItems from Firestore
        for (const cartItem in sessionIdCartItems) {
            console.log(
                "[*** sessionIdCartItems[cartItem].docId ***] to delete from cartsData: ",
                sessionIdCartItems[cartItem].docId
            );
            try {
                this.handleDeleteDocFromFirestore(
                    "cartsData",
                    sessionIdCartItems[cartItem].docId
                );
            } catch (error) {
                console.error(
                    "Error deleting sessionIdCartItems from Firestore: ",
                    error
                );
            }
        }

        // 3.B. Reset sessionIdCartItems
        this.resetSessionIdCartItems();

        console.log("UPDATE LOCAL DATABASE VARIABLES HERE");
        try {
            await this.getUpdateLocalDataBase();
        } catch (error) {
            console.error("Error updating local variables: ", error);
        }

        this.handleDisplayOrder(newOrderId);
    };

    // "Proceed to checkout" button at right panel
    handleProceedToCheckoutBtn = () => {
        console.log("Received command PROCEED TO CHECKOUT");
        this.renderCheckOutPanel();
        this.renderCheckOutPricePanel();
    };

    // Product card as "button" at main page
    handleProductItem = (element) => {
        // TEST-TBS REMOVE IN PROD
        console.log("Display CARD for product ID: ", element.id);

        const productIdToDisplay = this.getProdIdFromElementId(element.id);
        const productToDisplay = this.getProductObjectById(productIdToDisplay);
        this.renderProductCard(productToDisplay);
    };

    // Display Order By Order Number
    handleDisplayOrder = (orderNumber) => {
        console.log("Received command DISPLAY ORDER:", orderNumber);

        // Get "orderDetailsToDisplay" by orderNumber:
        const orderDetailsToDisplay =
            this.getOrderDetailsToDisplay(orderNumber);
        console.log("orderDetailsToDisplay: ", orderDetailsToDisplay);

        // Get "orderItemsToDisplay" by orderNumber:
        const orderItemsToDisplay = this.getOrderItemsToDisplay(orderNumber);
        console.log("orderItemsToDisplay: ", orderItemsToDisplay);

        this.renderOrderPanel(orderDetailsToDisplay, orderItemsToDisplay);
        this.renderOrderPricePanel(orderDetailsToDisplay);
    };

    handleDisplayHistoricalOrder = (element) => {
        // TEST-TBS REMOVE IN PROD
        console.log("Display ORDER with ID: ", element.id);

        const orderNumber = this.getProdIdFromElementId(element.id);

        this.handleDisplayOrder(orderNumber);
    };

    handleQtyChangeBtn = (elementDOM, adder) => {
        const itemId = this.getProdIdFromElementId(elementDOM.id);
        // TEST-TBS REMOVE IN PROD
        console.log(
            "Function: 'handleQtyChangeBtn()': update QTY of prod ID: ",
            elementDOM.id
        );
        console.log("'sessionIdCartItems': ", sessionIdCartItems);
        console.log("itemId: ", itemId);

        // product/object to update:
        const productToUpdate = JSON.parse(
            JSON.stringify(
                sessionIdCartItems.find((product) => product.itemId === itemId)
            )
        );

        if (!productToUpdate) {
            console.log("Product/object not found");
            return;
        }

        // remove product from array:

        const filteredsessionIdCartItems = sessionIdCartItems.filter(
            (product) => product.itemId !== itemId
        );

        if (productToUpdate.qty + adder > 0) {
            this.updateProduct(
                filteredsessionIdCartItems,
                productToUpdate,
                adder
            );
            this.updateCartDOM(itemId, productToUpdate);
        } else {
            this.deleteProduct(filteredsessionIdCartItems, productToUpdate);
            this.handleGotoCartBtn();
        }
    };

    // Update payment method if new one is selected by User
    updatePaymentMethodInSession = () => {
        const selectedRadioId = this.handleRadioButtonSelection();

        if (selectedRadioId !== null) {
            // Check if a radio button was selected
            if (sessionIdCartDetails.paymentMethod !== selectedRadioId) {
                // Compare with current value
                sessionIdCartDetails.paymentMethod = selectedRadioId; // Update if different
                console.log(`Updated paymentMethod to ${selectedRadioId}`);
            } else {
                console.log("paymentMethod is the same. No update needed.");
            }
        } else {
            console.log(
                "No radio button selected. Cannot update paymentMethod."
            );
        }
    };

    addProduct = (itemId, userId) => {
        const newProductToCart = {
            docId: this.handleNewIdGeneration(),
            itemId: itemId,
            qty: 1,
            userId: userId,
        };

        console.log(
            "MODEL: try to add to database.cartsData a [*** newProductToCart *** ]: ",
            newProductToCart
        );
        this.handleAddDocToFirestore("cartsData", newProductToCart);

        sessionIdCartItems.push(newProductToCart);
        console.log(
            "Updated [*** sessionIdCartItems ***]: ",
            sessionIdCartItems
        );
    };

    updateProduct = (filteredsessionIdCartItems, productToUpdate, adder) => {
        // Modify product/object
        productToUpdate.qty += adder;

        // Add product back to array
        filteredsessionIdCartItems.push(productToUpdate);

        // Update Firestore
        this.handleUpdateDocInFirestore("cartsData", productToUpdate);

        // Update global variable
        sessionIdCartItems = filteredsessionIdCartItems;
    };

    deleteProduct = (filteredsessionIdCartItems, productToUpdate) => {
        // Delete product from Firestore
        this.handleDeleteDocFromFirestore("cartsData", productToUpdate.docId);

        // Update global variable
        sessionIdCartItems = filteredsessionIdCartItems;
    };

    updateCartDOM = (itemId, productToUpdate) => {
        //  update/re-render 'qty' in user's cart (DOM)
        this.handleViewOfPartQty(itemId, productToUpdate.qty);
        //  update total price 'sessionIdCartPrice' (global variable)
        this.callToUpdateCartPriceVariable();
        //  update/re-render 'total price' in user's cart (DOM)
        this.handleViewOfTotalPrceInCart(sessionIdCartPrice.priceTotal);
    };

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

    // *** POPUP SECTION FUNCTIONS ***

    activatePopupWelcomeDisclaimer = () => {
        // Clear Popup Content
        console.log("Got comand to ACTIVATE WELCOME DISCLAIMER");
        this.popupContentNode.innerHTML = "";
        const newContent = this.viewAdmin.createPopupMessage(welcomeDisclaimer);
        this.popupContentNode.appendChild(newContent);
        this.togglePopup();
    };

    activatePopupMessage = (customMessage) => {
        // Clear Popup Content
        console.log("Got comand to ACTIVATE CUSTOM MESSAGE");
        this.popupContentNode.innerHTML = "";
        const newContent = this.viewAdmin.createPopupMessage(customMessage);
        this.popupContentNode.appendChild(newContent);
        this.togglePopup();
    };

    activatePopupUpdateAddress = () => {
        // Clear Popup Content
        console.log("Got comand to ACTIVATE POPUP");
        this.popupContentNode.innerHTML = "";
        const newAddress = this.viewAdmin.createPopupUpdateAddress();
        this.popupContentNode.appendChild(newAddress);
        this.togglePopup();
    };

    activatePopupUpdatePaymentMethod = () => {
        // Clear Popup Content
        console.log("Got comand to ACTIVATE POPUP");
        this.popupContentNode.innerHTML = "";
        this.popupContentNode.appendChild(
            this.viewAdmin.createPopupUpdatePaymentMethod(paymentMethods)
        );
        this.togglePopup();
    };

    togglePopup = () => {
        this.bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
        this.containerPupupNode.classList.toggle(POPUP_OPEN_CLASSNAME);
    };

    // Function to handle radio button selection in POPUP SECTION
    handleRadioButtonSelection = () => {
        const radioButtons = document.querySelectorAll(
            'input[type="radio"][name="method"]'
        );
        let selectedRadioId = null;

        radioButtons.forEach((radio) => {
            if (radio.checked) {
                selectedRadioId = radio.id;
            }
        });

        if (selectedRadioId) {
            console.log("Selected radio button ID: ", selectedRadioId);
            return selectedRadioId;
        } else {
            console.log("No radio button selected!");
            return null;
        }
    };

    // *** BUTTON CLICK HANDLERS ***
    handleButtonsClickLeft = (event) => {
        const target = event.target;

        // "< Back to Products" button
        if (target.classList.contains("goto-products-btn")) {
            this.handleGotoProductsBtn();
            return;
        }

        // "< Back to Cart" button
        if (target.classList.contains("goto-cart-btn")) {
            this.handleGotoCartBtn();
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

        // "Update" button for Bill-to-Address at checkout
        const updateAddress = this.findAncestorByClass(
            target,
            "address-wrapper"
        );
        if (updateAddress) {
            console.log("Got command to UPDATE ADDRESS");
            this.activatePopupUpdateAddress();
        }

        // "Update" button for Payment Method at checkout
        const updatePaymentMethod = this.findAncestorByClass(
            target,
            "payment-method-wrapper"
        );
        if (updatePaymentMethod) {
            console.log("Got command to UPDATE PAYMENT METHOD");
            this.activatePopupUpdatePaymentMethod();
        }

        // "Update" button for Cart Items at checkout
        const updateCheckoutCart = this.findAncestorByClass(
            target,
            "checkout-cart-wrapper"
        );
        if (updateCheckoutCart) {
            console.log("Got command to UPDATE CHECKOUT CART ITEMS");
            this.handleGotoCartBtn();
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
            this.handleGotoCartBtn();
        }

        // "Proceed to checkout" button at right panel
        const proceedToCheckoutBtn = this.findAncestorByClass(
            target,
            "cart-checkout-btn"
        );
        if (proceedToCheckoutBtn) {
            this.handleProceedToCheckoutBtn();
        }

        // "Place Order" button at right panel
        const placeOrderBtn = this.findAncestorByClass(
            target,
            "place-order-btn"
        );
        if (placeOrderBtn) {
            console.log("Received PLACE ORDER command.");
            this.handleOrderPlacement();
        }
    };

    handleButtonsClickPupup = (event) => {
        const target = event.target;

        // Update button in Update Address section
        if (target.id === "agreeBtn") {
            console.log("clicked element with class: ", target.classList);
            this.togglePopup();
        }

        // Update Address Button
        if (target.id === "updateAddressBtn") {
            console.log("clicked element with class: ", target.classList);

            this.togglePopup();
            this.activatePopupMessage(errorInsufficientPermission);
        }

        // Update Payment Method Button
        if (target.id === "updatePaymentMethodBtn") {
            console.log("clicked element with class: ", target.classList);
            this.updatePaymentMethodInSession();
            console.log(
                "Check if sessionIdCartDetails updated: ",
                sessionIdCartDetails
            );
            this.renderCheckOutPanel();
            this.togglePopup();
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

        this.containerPupupNode.addEventListener(
            "click",
            this.handleButtonsClickPupup
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
