import { ViewProducts } from "./view-products.js";
import { ViewCart } from "./view-cart.js";
import { ViewOrders } from "./view-orders.js";
import { ViewAdmin } from "./view-admin.js";
import { ViewSuperadmin } from "./view-superadmin.js";
import { ModelProducts } from "./model-products.js";
import { ModelCart } from "./model-cart.js";
import { ModelOrders } from "./model-orders.js";
import { ModelAdmin } from "./model-admin.js";

export class Controller {
    constructor() {
        this.viewProducts = new ViewProducts();
        this.viewCart = new ViewCart();
        this.viewOrders = new ViewOrders();
        this.viewAdmin = new ViewAdmin();
        this.viewSuperadmin = new ViewSuperadmin();
        this.modelProducts = new ModelProducts();
        this.modelCart = new ModelCart();
        this.modelOrders = new ModelOrders();
        this.modelAdmin = new ModelAdmin();
    }
    initializeAppMain = () => {
        console.log("HELLO! INIT CARRIED OUT SUCCESFULLY");
        this.viewProducts.checkModuleLinkage();
        this.viewCart.checkModuleLinkage();
        this.viewOrders.checkModuleLinkage();
        this.viewAdmin.checkModuleLinkage();
        this.viewSuperadmin.checkModuleLinkage();
        this.modelProducts.checkModuleLinkage();
        this.modelCart.checkModuleLinkage();
        this.modelOrders.checkModuleLinkage();
        this.modelAdmin.checkModuleLinkage();
    };
}
