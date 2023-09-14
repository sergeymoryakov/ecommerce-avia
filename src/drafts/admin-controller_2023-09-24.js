// NOTE AS OF 2023-09-24
// THIS VERSION OF THE FILE INCLUDES:
// - IMPORT OF BACKUP-DATASET
// - DATASET BACKUP FEATURE ("TEST" BUTTON)
// - RENDERING BOTH DATASET AND BACKUP-DATASET ON SAME SCREEN

import { AdminView } from "./admin-view.js";
import { AdminModel } from "./admin-model.js";
import { AdminFirebase } from "./admin-firebase.js";

// TEST Usage of Data objects:

const dbCollectionNames = [
    "usersData",
    "customersData",
    "cartsData",
    "ordersData",
    "orderItemsData",
    "productItems",
];

const dbCollectionNames2 = [
    "usersDataDb",
    "customersDataDb",
    "cartsDataDb",
    "ordersDataDb",
    "orderItemsDataDb",
    "productItemsDb",
];

let dataInstance = {};
import { backupInstance } from "../data/backup.js";

console.log("backupInstance: ", backupInstance);

dbCollectionNames.forEach((array) => {
    console.log(`backupInstance.${array}: `);
    console.log(backupInstance[array]);
});

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

        // TEST Usage of Data objects:
        console.log("testing import from Firestore to dataInstance:");
        for (const collectionName of dbCollectionNames2) {
            dataInstance[collectionName] = await this.adminFirebase.get(
                collectionName
            );
        }
        console.log("dataInstance: ", dataInstance);
        dbCollectionNames2.forEach((array) => {
            console.log(`dataInstance.${array}:`);
            console.log(dataInstance[array]);
        });

        usersDataDb = await this.adminFirebase.get(usersDataDbName);
        customersDataDb = await this.adminFirebase.get(customersDataDbName);
        cartsDataDb = await this.adminFirebase.get(cartsDataDbName);
        ordersDataDb = await this.adminFirebase.get(ordersDataDbName);
        orderItemsDataDb = await this.adminFirebase.get(orderItemsDataDbName);
        productItemsDb = await this.adminFirebase.get(productItemsDbName);

        // console.log("usersDataDb: ", usersDataDb);
        // console.log("productItemsDb: ", productItemsDb);

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
    // SUPPORT FUNCTION: GET SISTER ARRAY BY NAME:
    getSisterArrayByName(arrayName) {
        if (arrayName === "usersData") return usersDataDb;
        if (arrayName === "customersData") return customersDataDb;
        if (arrayName === "cartsData") return cartsDataDb;
        if (arrayName === "ordersData") return ordersDataDb;
        if (arrayName === "orderItemsData") return orderItemsDataDb;
        if (arrayName === "productItems") return productItemsDb;
        return null;
    }
    // SUPPORT FUNCTION: GET SISTER ARRAY BY NAME:
    getSisterArrayNameByName(arrayName) {
        if (arrayName === "usersData") return "usersDataDb";
        if (arrayName === "customersData") return "customersDataDb";
        if (arrayName === "cartsData") return "cartsDataDb";
        if (arrayName === "ordersData") return "ordersDataDb";
        if (arrayName === "orderItemsData") return "orderItemsDataDb";
        if (arrayName === "productItems") return "productItemsDb";
        return null;
    }

    // Add duplicate document (element/object)
    cloneDocument(array, objectId) {
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
        const affectedArray = this.getArrayByName(elementCollection);

        const clonedObject = this.cloneDocument(affectedArray, elementId);
        console.log("clonedObject: ", clonedObject);

        // Verify if need to add to Firestore collection
        if (
            [
                customersDataDbName,
                productItemsDbName,
                usersDataDbName,
                ordersDataDbName,
                orderItemsDataDbName,
                cartsDataDbName,
            ].includes(elementCollection)
        ) {
            console.log(
                `trying to include clonedObject: ${clonedObject} into Collection ${elementCollection}`
            );
            // try to add new doc (clonedObject) to Firestore (elementCollection):
            this.adminFirebase.addDocToFirestore(
                elementCollection,
                clonedObject
            );
        } else {
            // Identify Sister Array Name, Sister Array
            const sisterArray = this.getSisterArrayByName(elementCollection);
            const sisterArrayName =
                this.getSisterArrayNameByName(elementCollection);
            // try to add new doc (clonedObject) to sister Firestore array/collection:
            this.adminFirebase.addDocToFirestore(sisterArrayName, clonedObject);
            // add cloned object/document to local copy of the Firestore array/collection
            sisterArray.push(clonedObject);
        }
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

        console.log("docToUpdate: ", docToUpdate);

        // Verify if need to update in Firestore collection
        if (
            [
                customersDataDbName,
                productItemsDbName,
                usersDataDbName,
                ordersDataDbName,
                orderItemsDataDbName,
                cartsDataDbName,
            ].includes(elementCollection)
        ) {
            console.log(
                `trying to update element/doc with docId: ${elementId} in Collection ${elementCollection}`
            );
            // try to update doc with elementId (docId) in Firestore collection:
            this.adminFirebase.updateDocInFirestore(
                elementCollection,
                docToUpdate
            );
        }

        this.displayTables();
    };

    handleDeleteBtnClick = (button) => {
        const elementCollection = this.getCollectionFromId(button.id);
        const elementId = this.getDocFromId(button.id);
        console.log(
            `Request to delete element in ${elementCollection}, docId: ${elementId}.`
        );

        // Verify if need to add to Firestore collection
        if (
            [
                customersDataDbName,
                productItemsDbName,
                usersDataDbName,
                ordersDataDbName,
                orderItemsDataDbName,
                cartsDataDbName,
            ].includes(elementCollection)
        ) {
            console.log(
                `trying to delete element/doc with docId: ${elementId} from Collection ${elementCollection}`
            );
            // try to delete doc with elementId (docId) from Firestore collection:
            this.adminFirebase.deleteDocFromFirestore(
                elementCollection,
                elementId
            );
        }

        // Remove element/doc from affected array/collection using .splice() method

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

    fetchBackupData = async () => {
        try {
            const response = await fetch("../js/backup.json");

            // Log response object
            console.log("Fetch response: ", response);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    attachEventListeners() {
        this.adminView.containerLeftNode.addEventListener(
            "click",
            this.handleButtonsClick
        );

        this.adminView.testBtnNode.addEventListener("click", async () => {
            console.log("call backupData function");

            backupData(dataInstance);

            const fetchedBackupData = await this.fetchBackupData();
            console.log("fetchedBackupData: ", fetchedBackupData);
        });
    }
}

// // FUNCTIONS: SUPPORT AND TBS

function backupData(array) {
    // convert array to JSON format
    const jsonString = JSON.stringify(array, null, 2);

    //  Create a blob object
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create URL for blob
    const url = URL.createObjectURL(blob);

    // Set timing
    const t = Date.now();

    // Create an ancor element
    const a = document.createElement("a");
    a.href = url;
    a.download = `backup-${t}.json`;

    // display backup file name
    console.log(`data saved to file 'backup-${t}.json'`);

    // Trigger the download
    document.body.appendChild(a);
    a.click();

    // clean up
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

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
