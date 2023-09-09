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
} from "./admin-constants.js";

export class AdminController {
    constructor() {
        this.adminView = new AdminView();
        this.adminModel = new AdminModel();
        this.adminFirebase = new AdminFirebase();
    }
    initializeAppMain = () => {
        console.log("HELLO! INIT CARRIED OUT SUCCESFULLY");
        this.adminView.checkModuleLinkage();
        this.adminModel.checkModuleLinkage();
        this.adminFirebase.checkModuleLinkage();

        this.displayTables();

        this.adminView.renderMenu(
            customersDataName,
            productItemsName,
            usersDataName,
            ordersDataName,
            cartsDataName
        );

        this.adminFirebase.get(usersDataName);
    };

    displayTables = () => {
        this.adminView.clearContainerLeft();
        this.adminView.renderTable(usersData, usersDataName);
        this.adminView.renderTable(customersData, customersDataName);
        this.adminView.renderTable(cartsData, cartsDataName);
        this.adminView.renderTable(ordersData, ordersDataName);
        this.adminView.renderTable(productItems, productItemsName);
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
