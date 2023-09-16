import { ViewProducts } from "./view-products.js";
import { ViewCart } from "./view-cart.js";
import { ViewOrders } from "./view-orders.js";
import { ViewAdmin } from "./view-admin.js";
import { ViewSuperadmin } from "./view-superadmin.js";
import { ModelFirebase } from "./model-firebase.js";
import { ModelProducts } from "./model-products.js";
import { ModelCart } from "./model-cart.js";
import { ModelOrders } from "./model-orders.js";
import { ModelAdmin } from "./model-admin.js";

// Import random ID generator
import { v4 as uuidv4 } from "uuid";

// Get DB collection names (dbCollectionNames) from constants.js
import { dbCollectionNames } from "../common/constants.js";

// Initiate database instance (dataBase):
let dataBase = {};

export class Controller {
    constructor() {
        this.viewProducts = new ViewProducts();
        this.viewCart = new ViewCart();
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
        console.log("dataBase{}: ", dataBase);

        // Check Image URLs - TEST for Images
        // this.modelFirebase.checkImageUrls();

        // Left Container - Render product items
        this.viewProducts.renderProductItems(dataBase.productItems);

        // Right Container - Render Cart Title

        // Right Container - Render Cart Icons

        // Right Container - Render Go-To-Cart Button

        // Right Container - Render Orders Title

        // Right Container - Render Order Links

        // Attach Event Listeners (Products)
        // Attach Event Listeners (Cart Icons)
        // Attach Event Listeners (Order Links)

        // Alert - Popup inform the test name usage
    };

    // Left Container - Render product items

    // Right Container - Render Cart Title

    // Right Container - Render Cart Icons

    // Right Container - Render Go-To-Cart Button

    // Right Container - Render Orders Title

    // Right Container - Render Order Links
}