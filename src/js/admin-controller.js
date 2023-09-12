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

// FOR TEST-TBS - REMOVE BEFORE PROD
// Link arrays and names:
// const arrayMap = {
//     [customersDataName]: customersData,
//     [productItemsName]: productItems,
//     [usersDataName]: usersData,
//     [ordersDataName]: ordersData,
//     [orderItemsDataName]: orderItemsData,
//     [cartsDataName]: cartsData,
//     [customersDataDbName]: customersDataDb,
//     [productItemsDbName]: productItemsDb,
//     [usersDataDbName]: usersDataDb,
//     [ordersDataDbName]: orderItemsDataDb,
//     [orderItemsDataDbName]: orderItemsDataDb,
//     [cartsDataDbName]: cartsDataDb,
// };

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
        // console.log("usersData: ", usersData);
        // console.log("usersDataDb: ", usersDataDb);
        // console.log("usersDataDb: ", usersDataDb[0]);
        // console.log("usersDataDb: ", usersDataDb[1]);

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

    // Functions to split elemnt ID (${arrayName}_${object.docId}_${key})
    // Get Collection (array name) - [0]-th element
    getCollectionFromId = (idSting) => {
        return idSting.split("_")[0];
    };

    // Get Document ID (object) - [1]-st element
    getDocFromId = (idSting) => {
        return idSting.split("_")[1];
    };

    // Get Field (key name) - [2]-nd element
    getKeyFromId = (idSting) => {
        return idSting.split("_")[2];
    };

    // SUPPORT FUNCTION: GET ARRAY BY IT'S NAME:
    getArrayByName(arrayName) {
        if (arrayName === "usersData") return usersData;
        if (arrayName === "usersDataDb") return usersDataDb;
        if (arrayName === "customersData") return customersData;
        if (arrayName === "customersDataDb") return customersDataDb;
        if (arrayName === "cartsData") return cartsData;
        if (arrayName === "cartsDataDb") return cartsDataDb;
        if (arrayName === "ordersData") return ordersData;
        if (arrayName === "ordersDataDb") return ordersDataDb;
        if (arrayName === "orderItemsData") return orderItemsData;
        if (arrayName === "orderItemsDataDb") return orderItemsDataDb;
        if (arrayName === "productItems") return productItems;
        if (arrayName === "productItemsDb") return productItemsDb;
        return null;
    }

    // Add duplicate document (element/object)
    duplicateDocument(array, objectId) {
        // FOR TEST- TBS ONLY - REMOVE IN PROD:
        // console.log(array[0]);
        // console.log(array[1]);

        // Find the object by ID
        const originalObject = array.find((item) => item.docId === objectId);
        if (!originalObject) {
            console.log("Object with provided ID is not located.");
            return;
        }

        //  Clone object
        const clonedObject = JSON.parse(JSON.stringify(originalObject));

        // Modify / create unique ID
        clonedObject.docId = this.adminModel.generateNewId(12);

        // return cloned objc
        return clonedObject;
    }

    handleAddBtnClick = (button) => {
        const elementCollection = this.getCollectionFromId(button.id);
        const elementId = this.getDocFromId(button.id);
        console.log(
            `Request to clone element in ${elementCollection}, docId: ${elementId}.`
        );
        console.log("elementCollection =", elementCollection);
        const affectedArray = this.getArrayByName(elementCollection);

        console.log("affectedArray =", affectedArray);
        const clonedObject = this.duplicateDocument(affectedArray, elementId);
        console.log("clonedObject: ", clonedObject);

        // Add cloned object/document to array/collection:
        affectedArray.push(clonedObject);
        this.displayTables();
        return;
    };

    handleUpdateBtnClick = (button) => {
        const elementCollection = this.getCollectionFromId(button.id);
        const elementId = this.getDocFromId(button.id);
        console.log(
            `Request to update element in ${elementCollection}, docId: ${elementId}.`
        );
        const affectedArray = this.getArrayByName(elementCollection);

        // Locate the object/document to update:
        const docToUpdate = affectedArray.find(
            (doc) => doc.docId === elementId
        );

        if (!docToUpdate) {
            console.log("Not found element/document with docId = ", elementId);
            return;
        }

        // Locate table row with clicked button
        const tableRow = button.closest("tr");
        const cells = tableRow.querySelectorAll("td");

        // Locate all input fields
        cells.forEach((cell) => {
            const inputField = cell.querySelector("input");
            if (inputField) {
                const keyName = this.getKeyFromId(inputField.id);
                const value = inputField.value;
                docToUpdate[keyName] = value;
            }
        });
        this.displayTables();
    };

    handleDeleteBtnClick = (button) => {
        const elementCollection = this.getCollectionFromId(button.id);
        const elementId = this.getDocFromId(button.id);
        console.log(
            `Request to delete element in ${elementCollection}, docId: ${elementId}.`
        );
        let affectedArray = this.getArrayByName(elementCollection);
        const index = affectedArray.findIndex((doc) => doc.docId === elementId);

        if (index !== -1) {
            affectedArray.splice(index, 1);
            console.log("Deleted element/document with docId = ", elementId);
        } else {
            console.log("Not found element/document with docId = ", elementId);
        }
        this.displayTables();
    };

    handleButtonsClick = (event) => {
        const target = event.target;

        if (target.classList.contains("add-btn")) {
            this.handleAddBtnClick(target);
        }

        if (target.classList.contains("updt-btn")) {
            this.handleUpdateBtnClick(target);
        }

        if (target.classList.contains("del-btn")) {
            this.handleDeleteBtnClick(target);
        }
    };

    attachEventListeners() {
        this.adminView.containerLeftNode.addEventListener(
            "click",
            this.handleButtonsClick
        );

        // FOR TEST- TBS ONLY - REMOVE IN PROD:
        // console.log("this.adminView:", this.adminView);
        // console.log("this.adminView.docAddBtn:", this.adminView.docAddBtnNode);

        // REPLACED BELOW ITEMS BY COMMON PARRENT LISTENER
        // this.adminView.docAddBtnNode.forEach((button) => {
        //     button.addEventListener("click", (event) =>
        //         this.handleAddBtnClick(event)
        //     );
        // });

        // this.adminView.docUpdateBtnNode.forEach((button) => {
        //     button.addEventListener("click", (event) =>
        //         this.handleAddBtnClick(event)
        //     );
        // });

        // this.adminView.docDeleteBtnNode.forEach((button) => {
        //     button.addEventListener("click", (event) =>
        //         this.handleAddBtnClick(event)
        //     );
        // });

        // FOR TEST-TBS ONLY - REMOVE IN PROD:
        this.adminView.testBtnNode.addEventListener("click", () => {
            const newId = this.adminModel.generateNewId(12);
            console.log("New randome id(12) =", newId);
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
