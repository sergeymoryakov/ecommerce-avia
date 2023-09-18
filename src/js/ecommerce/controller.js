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

// Init cross-ref Map: image - url
const imageLinksMap = new Map();

export class Controller {
    constructor() {
        this.viewProducts = new ViewProducts(this);
        this.viewCart = new ViewCart(this);
        this.viewOrders = new ViewOrders();
        this.viewAdmin = new ViewAdmin();
        this.viewSuperadmin = new ViewSuperadmin();
        this.modelFirebase = new ModelFirebase();
        this.modelProducts = new ModelProducts();
        this.modelCart = new ModelCart();
        this.modelOrders = new ModelOrders();
        this.modelAdmin = new ModelAdmin();
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
        }

        // FOR TEST AND TBS - REMOVE IN PROD:
        // console.log("dataBase{}: ", dataBase);

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
        confirm(
            `Hi there, this application was set for demonstration purpose, therefore a User ID ${sessionId} was assigned for this session. Fake Name, Lastname, and other user properties are generated for practice purpose only. Should you wish to use this application and/or customize it fo the purpose of your business please reach out to the developer at seppo.gigital@gmail.com.`
        );

        // Left Container - Render product items
        this.viewProducts.renderProductItems(dataBase.productItems);

        // Get cart items by sesstion user ID:
        sessionIdCart = this.getCartItemsByUserID(sessionId);
        console.log(
            `Cart items (sessionIdCart) for User ID ${sessionId}: `,
            sessionIdCart
        );

        // Get orders list by user ID:
        sessionIdOrders = this.getOrdersByUserID(sessionId);
        console.log(
            `Orders History (sesstionOrders) for User ID ${sessionId}: `,
            sessionIdOrders
        );

        // Right Container - Render Cart Summary
        await this.viewCart.renderCartSummaryNoTotal(sessionIdCart);

        // Right Container - Render Cart Title

        // Right Container - Render Cart Icons

        // Right Container - Render Go-To-Cart Button

        // Right Container - Render Orders Title

        // Right Container - Render Order Links

        // Attach Event Listeners (Products)
        // Attach Event Listeners (Cart Icons)
        // Attach Event Listeners (Order Links)

        // TEST & TBS ITEMS
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
            (product) => product.id === productId
        );
        console.log("productObject: ", productObject);
        console.log("productObject[0].itemImg: ", productObject[0].itemImg);
        return productObject[0].itemImg;
    };

    // Left Container - Render product items

    // Right Container - Render Cart Title

    // Right Container - Render Cart Icons

    // Right Container - Render Go-To-Cart Button

    // Right Container - Render Orders Title

    // Right Container - Render Order Links
}
