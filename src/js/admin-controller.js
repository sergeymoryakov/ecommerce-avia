import { AdminView } from "./admin-view.js";
import { AdminModel } from "./admin-model.js";
import { AdminFirebase } from "./admin-firebase.js";

import {
    usersData,
    customersData,
    cartsData,
    ordersData,
    productItems,
} from "./admin-data.js";

import {
    customersDataName,
    productItemsName,
    usersDataName,
    ordersDataName,
    cartsDataName,
    customersDataDbName,
    productItemsDbName,
    usersDataDbName,
    ordersDataDbName,
    cartsDataDbName,
} from "./admin-constants.js";

let usersDataDb = [];
let customersDataDb = [];
let cartsDataDb = [];
let ordersDataDb = [];
let productItemsDb = [];

export class AdminController {
    constructor() {
        this.adminView = new AdminView();
        this.adminModel = new AdminModel();
        this.adminFirebase = new AdminFirebase();
    }
    initializeAppMain = async () => {
        console.log("HELLO! INIT CARRIED OUT SUCCESFULLY");
        this.adminView.checkModuleLinkage();
        this.adminModel.checkModuleLinkage();
        this.adminFirebase.checkModuleLinkage();

        usersDataDb = await this.adminFirebase.get(usersDataName);
        customersDataDb = await this.adminFirebase.get(customersDataName);
        cartsDataDb = await this.adminFirebase.get(cartsDataName);
        ordersDataDb = await this.adminFirebase.get(ordersDataName);
        productItemsDb = await this.adminFirebase.get(productItemsName);

        console.log("usersData: ", usersData);
        console.log("usersDataDb: ", usersDataDb);
        this.displayTables();

        this.adminView.renderMenu(
            customersDataName,
            productItemsName,
            usersDataName,
            ordersDataName,
            cartsDataName
        );
    };

    displayTables = async () => {
        this.adminView.clearContainerLeft();
        this.adminView.renderTable(usersData, usersDataName);
        this.adminView.renderTable(usersDataDb, usersDataDbName);
        this.adminView.renderTable(customersData, customersDataName);
        this.adminView.renderTable(customersDataDb, customersDataDbName);
        this.adminView.renderTable(cartsData, cartsDataName);
        this.adminView.renderTable(cartsDataDb, cartsDataDbName);
        this.adminView.renderTable(ordersData, ordersDataName);
        this.adminView.renderTable(ordersDataDb, ordersDataDbName);
        this.adminView.renderTable(productItems, productItemsName);
        this.adminView.renderTable(productItemsDb, productItemsDbName);
    };
}

// FUNCTIONS: SUPPORT AND TBS

// Function gets ID and Value of Input element and returns in
// mini-object format:
const extractInfoFromId = (fullId, inputValue) => {
    idParts = fullId.split("_");
    // For reference, elemment ID:
    // "DataElement.id = `${arrayName}_${object.id}_${key}`;"
    const arrayName = idParts[0];
    const objectId = idParts[2];
    const key = idParts[3];
    const value = inputValue;

    return {
        arrayName: arrayName,
        objectId: objectId,
        key: key,
        value: value,
    };
};

// Function monitors input changes and displays details in console:
document.addEventListener("input", function (event) {
    if (event.target.tagName === "INPUT") {
        const fullId = event.target.id;
        const inputValue = event.target.value;

        const info = extractInfoFromId(fullId, inputValue);
        console.log(info);
    }
});
