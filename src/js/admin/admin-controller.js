import { AdminView } from "./admin-view.js";
import { AdminModel } from "./admin-model.js";
import { AdminFirebase } from "./admin-firebase.js";

import { v4 as uuidv4 } from "uuid";

import { dbCollectionNames } from "../common/constants.js";

let isViewBackup = false;
let dataInstance = {};
import { backupInstance } from "../../data/backup.js";

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

        console.log("Action: Import from Firestore to dataInstance:");
        for (const collectionName of dbCollectionNames) {
            dataInstance[collectionName] = await this.adminFirebase.get(
                collectionName
            );
        }

        this.displayDataInstanceTables();

        this.adminView.renderMenu(dbCollectionNames);

        this.attachEventListeners();
    };

    generateUniqueId() {
        return uuidv4();
    }

    // NOTE: isBackup - a backupInstancevalidator:
    // 0 - dataInstance
    // 1 - backupInstance
    displayDataInstanceTables = () => {
        this.adminView.clearContainerLeft();
        for (const collectionName of dbCollectionNames) {
            this.adminView.renderTable(
                dataInstance[collectionName],
                collectionName,
                0
            );
        }
    };

    displayBackupAndInstanceTables = () => {
        this.adminView.clearContainerLeft();
        for (const collectionName of dbCollectionNames) {
            this.adminView.renderTable(
                backupInstance[collectionName],
                collectionName,
                1
            );
            this.adminView.renderTable(
                dataInstance[collectionName],
                collectionName,
                0
            );
        }
    };

    // Functions to split elemnt ID (${isBackup}_${arrayName}_${doc.docId}_${key})
    // Get Collection (array name) - [0]-th element
    getInstanceFromId = (idSting) => {
        return idSting.split("_")[0];
    };

    // Get Collection (array name) - [0]-th element
    getCollectionFromId = (idSting) => {
        return idSting.split("_")[1];
    };

    // Get Document ID (object) - [1]-st element
    getDocFromId = (idSting) => {
        return idSting.split("_")[2];
    };

    // Get Field (key name) - [2]-nd element
    getKeyFromId = (idSting) => {
        return idSting.split("_")[3];
    };

    // Add duplicate document (element/object)
    cloneDocument(array, objectId) {
        // Find the object by ID
        const originalObject = array.find((item) => item.docId === objectId);
        if (!originalObject) {
            console.log("Object with provided ID is not located.");
            return;
        }

        //  Clone object
        const clonedObject = JSON.parse(JSON.stringify(originalObject));

        // Modify / create unique ID
        // clonedObject.docId = this.adminModel.generateNewId(12);
        clonedObject.docId = this.generateUniqueId();

        // return cloned objc
        return clonedObject;
    }

    handleAddBtnClick = (button) => {
        const isBackup = this.getInstanceFromId(button.id);
        const elementCollection = this.getCollectionFromId(button.id);
        const elementId = this.getDocFromId(button.id);
        console.log(
            `Request to clone element in ${elementCollection}, docId: ${elementId}.`
        );
        let affectedArray = [];
        let sisterArray = [];

        if (isBackup === "1") {
            affectedArray = backupInstance[elementCollection];
            sisterArray = dataInstance[elementCollection];
        } else {
            affectedArray = dataInstance[elementCollection];
        }

        const clonedObject = this.cloneDocument(affectedArray, elementId);
        console.log("clonedObject: ", clonedObject);

        // If backupInstance, also add document to dataIntance:
        if (isBackup === "1") {
            sisterArray.push(clonedObject);
        }

        console.log(
            `trying to include clonedObject: ${clonedObject} into Collection ${elementCollection}`
        );
        // try to add new doc (clonedObject) to Firestore (elementCollection):
        this.adminFirebase.addDocToFirestore(elementCollection, clonedObject);

        affectedArray.push(clonedObject);

        if (isViewBackup) {
            this.displayBackupAndInstanceTables();
        } else {
            this.displayDataInstanceTables();
        }
        return;
    };

    handleUpdateBtnClick = (button) => {
        const isBackup = this.getInstanceFromId(button.id);
        const elementCollection = this.getCollectionFromId(button.id);
        const elementId = this.getDocFromId(button.id);
        console.log(
            `Request to update element in ${elementCollection}, docId: ${elementId}.`
        );

        let affectedArray = [];
        if (isBackup === "1") {
            affectedArray = backupInstance[elementCollection];
        } else {
            affectedArray = dataInstance[elementCollection];
        }

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

        // If not a backupInstance, also update Firestore:
        if (isBackup === "0") {
            console.log(
                `trying to update element/doc with docId: ${elementId} in Collection ${elementCollection}`
            );
            // try to update doc with elementId (docId) in Firestore collection:
            this.adminFirebase.updateDocInFirestore(
                elementCollection,
                docToUpdate
            );
        }

        if (isViewBackup) {
            this.displayBackupAndInstanceTables();
        } else {
            this.displayDataInstanceTables();
        }
    };

    handleDeleteBtnClick = (button) => {
        const isBackup = this.getInstanceFromId(button.id);
        const elementCollection = this.getCollectionFromId(button.id);
        const elementId = this.getDocFromId(button.id);
        let affectedArray = [];

        console.log(
            `Request to delete element in ${elementCollection}, docId: ${elementId}.`
        );

        if (isBackup === "1") {
            affectedArray = backupInstance[elementCollection];
        } else {
            affectedArray = dataInstance[elementCollection];
            // If not a backupInstance, remove document from Firestore:
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
        const index = affectedArray.findIndex((doc) => doc.docId === elementId);

        if (index !== -1) {
            affectedArray.splice(index, 1);
            console.log("Deleted element/document with docId = ", elementId);
        } else {
            console.log("Not found element/document with docId = ", elementId);
        }
        if (isViewBackup) {
            this.displayBackupAndInstanceTables();
        } else {
            this.displayDataInstanceTables();
        }
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

        this.adminView.backupBtnNode.addEventListener("click", async () => {
            console.log("call backupData function");

            backupData(dataInstance);
        });

        this.adminView.getLocalBtnNode.addEventListener("click", async () => {
            console.log("Action called: render backup and server data tables.");

            this.displayBackupAndInstanceTables();
            isViewBackup = true;
        });

        this.adminView.getServerBtnNode.addEventListener("click", async () => {
            console.log("Action called: render server data tables.");

            this.displayDataInstanceTables();
            isViewBackup = false;
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

// THIS TEST FOR FETCHING BACKUP DATA WAS NOT PASSED - ERROR - TBD
async function fetchBackupData() {
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
}
