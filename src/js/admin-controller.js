import { AdminView } from "./admin-view.js";
import { AdminModel } from "./admin-model.js";
import { AdminFirebase } from "./admin-firebase.js";

import {
    usersData,
    customersData,
    cartsData,
    ordersData,
    orderItemsData,
    productItems,
} from "./admin-data.js";

import {
    customersDataName,
    productItemsName,
    usersDataName,
    ordersDataName,
    orderItemsDataName,
    cartsDataName,
    customersDataDbName,
    productItemsDbName,
    usersDataDbName,
    ordersDataDbName,
    orderItemsDataDbName,
    cartsDataDbName,
} from "./admin-constants.js";

let usersDataDb = [];
let customersDataDb = [];
let cartsDataDb = [];
let ordersDataDb = [];
let orderItemsDataDb = [];
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

        usersDataDb = await this.adminFirebase.get(usersDataDbName);
        customersDataDb = await this.adminFirebase.get(customersDataDbName);
        cartsDataDb = await this.adminFirebase.get(cartsDataDbName);
        ordersDataDb = await this.adminFirebase.get(ordersDataDbName);
        orderItemsDataDb = await this.adminFirebase.get(orderItemsDataDbName);
        productItemsDb = await this.adminFirebase.get(productItemsDbName);

        // For TEST only:
        console.log("usersData: ", usersData);
        console.log("usersDataDb: ", usersDataDb);
        console.log("usersDataDb: ", usersDataDb[0]);
        this.displayTables();

        this.adminView.renderMenu(
            customersDataName,
            productItemsName,
            usersDataName,
            ordersDataName,
            orderItemsDataName,
            cartsDataName
        );

        this.attachEventListeners();
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
        this.adminView.renderTable(orderItemsData, orderItemsDataName);
        this.adminView.renderTable(orderItemsDataDb, orderItemsDataDbName);
        this.adminView.renderTable(productItems, productItemsName);
        this.adminView.renderTable(productItemsDb, productItemsDbName);
    };

    handleAddBtnClick = (event) => {
        const button = event.target;
        const elementCollection = button.id.split("_")[0];
        const elementId = button.id.split("_")[1];
        console.log(
            `clicked element in ${elementCollection}, docId: ${elementId}.`
        );
    };

    attachEventListeners() {
        console.log("this.adminView:", this.adminView);
        console.log("this.adminView.docAddBtn:", this.adminView.docAddBtnNode);

        this.adminView.docAddBtnNode.forEach((button) => {
            button.addEventListener("click", (event) =>
                this.handleAddBtnClick(event)
            );
        });

        this.adminView.docUpdateBtnNode.forEach((button) => {
            button.addEventListener("click", (event) =>
                this.handleAddBtnClick(event)
            );
        });

        this.adminView.docDeleteBtnNode.forEach((button) => {
            button.addEventListener("click", (event) =>
                this.handleAddBtnClick(event)
            );
        });
    }
}

// // FUNCTIONS: SUPPORT AND TBS

// // Function gets ID and Value of Input element and returns in
// // mini-object format:
// const extractInfoFromId = (fullId, inputValue) => {
//     idParts = fullId.split("_");
//     // For reference, elemment ID:
//     // "DataElement.id = `${arrayName}_${object.id}_${key}`;"
//     const arrayName = idParts[0];
//     const objectId = idParts[2];
//     const key = idParts[3];
//     const value = inputValue;

//     return {
//         arrayName: arrayName,
//         objectId: objectId,
//         key: key,
//         value: value,
//     };
// };

// // Function monitors input changes and displays details in console:
// document.addEventListener("input", function (event) {
//     if (event.target.tagName === "INPUT") {
//         const fullId = event.target.id;
//         const inputValue = event.target.value;

//         const info = extractInfoFromId(fullId, inputValue);
//         console.log(info);
//     }
// });
