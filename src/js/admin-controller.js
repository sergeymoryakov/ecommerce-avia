import { AdminView } from "./admin-view.js";
import { AdminModel } from "./admin-model.js";

export class AdminController {
    constructor() {
        this.adminView = new AdminView();
        this.adminModel = new AdminModel();
    }
    initializeAppMain = () => {
        console.log("HELLO! INIT CARRIED OUT SUCCESFULLY");
        this.adminView.checkModuleLinkage();
        this.adminModel.checkModuleLinkage();
    };
}

import {
    usersData,
    customersData,
    cartsData,
    ordersData,
    productItems,
} from "./data.js";

const customersDataName = "customersData";
const productItemsName = "productItems";
const usersDataName = "usersData";
const ordersDataName = "ordersData";
const cartsDataName = "cartsData";

const containerLeftNode = document.getElementById("containerLeft");
const containerRightNode = document.getElementById("containerRight");

console.log("Module linked succesfully");

// Verification proper import:
console.log(customersData);

// FUNCTIONS: GENERAL

const clearContainerLeft = () => {
    containerLeftNode.innerHTML = "";
};

const clearContainerRight = () => {
    containerRightNode.innerHTML = "";
};

// FUNCTIONS: RENDER DATA TABLES

const createHeaderRow = (object) => {
    const newHeaderRow = document.createElement("tr");

    // create two empty elements and add as first child:
    const newEmptyElement1 = document.createElement("th");
    newEmptyElement1.classList = "db-section__table_cell";
    newHeaderRow.appendChild(newEmptyElement1);
    const newEmptyElement2 = document.createElement("th");
    newEmptyElement2.classList = "db-section__table_cell";
    newHeaderRow.appendChild(newEmptyElement2);

    // create header cells in loop
    for (const [key, value] of Object.entries(object)) {
        const newHeaderElement = document.createElement("th");
        newHeaderElement.classList = "db-section__table_cell";
        newHeaderElement.innerText = `${key}`;

        newHeaderRow.appendChild(newHeaderElement);
    }

    // Add another empty element at the end of the row:
    const newEmptyElement3 = document.createElement("th");
    newEmptyElement3.classList = "db-section__table_cell";
    newHeaderRow.appendChild(newEmptyElement3);

    return newHeaderRow;
};

const createDataRow = (object, arrayName) => {
    const newDataRow = document.createElement("tr");

    // create two button elements and add as first child:
    const newButtonElement1 = document.createElement("td");
    newButtonElement1.classList = "db-section__table_cell";
    const newButton1 = document.createElement("button");
    newButton1.classList = "db-section__table_button";
    newButton1.innerText = "+";
    newButtonElement1.appendChild(newButton1);
    newDataRow.appendChild(newButtonElement1);

    const newButtonElement2 = document.createElement("td");
    newButtonElement2.classList = "db-section__table_cell";
    const newButton2 = document.createElement("button");
    newButton2.classList = "db-section__table_button";
    newButton2.innerText = "u";
    newButtonElement2.appendChild(newButton2);
    newDataRow.appendChild(newButtonElement2);

    for (const [key, value] of Object.entries(object)) {
        // Add table cell element, class and ID:
        const newDataElement = document.createElement("td");
        newDataElement.classList = "db-section__table_cell";
        newDataElement.id = `${arrayName}_${object.id}_${key}`;

        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.id = `${arrayName}_${object.id}_${key}_input`;
        newInput.value = `${value}`;

        newDataElement.appendChild(newInput);
        newDataRow.appendChild(newDataElement);
    }

    // Add another button element to the end of row:
    const newButtonElement3 = document.createElement("td");
    newButtonElement3.classList = "db-section__table_cell";
    const newButton3 = document.createElement("button");
    newButton3.classList = "db-section__table_button";
    newButton3.innerText = "-";
    newButtonElement3.appendChild(newButton3);
    newDataRow.appendChild(newButtonElement3);

    return newDataRow;
};

const createTable = (array, arrayName) => {
    // Create new Table
    const newTable = document.createElement("table");

    // create Header Row and add to Table:
    const headerRow = createHeaderRow(array[0]);
    newTable.appendChild(headerRow);

    // create Data Rows and add to Table
    for (const object of array) {
        const dataRow = createDataRow(object, arrayName);
        newTable.appendChild(dataRow);
    }
    return newTable;
};

const renderTable = (array, arrayName) => {
    const tableWrapper = document.createElement("div");
    tableWrapper.classList = "db-section";

    const tableTitle = document.createElement("h2");
    tableTitle.classList = "db-section__title";
    tableTitle.id = `${arrayName}`;
    tableTitle.innerText = arrayName;

    const table = createTable(array, arrayName);
    table.classList = "db-section__table";

    tableWrapper.appendChild(tableTitle);
    tableWrapper.appendChild(table);
    console.log(tableWrapper);

    containerLeftNode.appendChild(tableWrapper);
};

const displayTables = () => {
    clearContainerLeft();
    renderTable(usersData, usersDataName);
    renderTable(customersData, customersDataName);
    renderTable(cartsData, cartsDataName);
    renderTable(ordersData, ordersDataName);
    renderTable(productItems, productItemsName);
};

// FUNCTIONS: RENDER MENU

const createMenuBtn = (arrayName) => {
    const menuBtnWrapper = document.createElement("li");
    menuBtnWrapper.classList = "menu-btn-wrapper";

    const menuBtn = document.createElement("a");
    menuBtn.classList = "menu-btn";
    menuBtn.href = `#${arrayName}`;
    menuBtn.innerText = `${arrayName}`;

    menuBtnWrapper.appendChild(menuBtn);
    return menuBtnWrapper;
};

const createMenu = () => {
    // Init menu wrapper:
    const menuWrapper = document.createElement("div");
    menuWrapper.classList = "menu-section";

    // Add menu title:
    const menuTitle = document.createElement("h2");
    menuTitle.classList = "menu-title";
    menuTitle.innerText = "Tables";
    menuWrapper.appendChild(menuTitle);

    // Create menu list:
    const menuList = document.createElement("ul");

    const usersDataBtn = createMenuBtn(usersDataName);
    menuList.appendChild(usersDataBtn);

    const customersDataBtn = createMenuBtn(customersDataName);
    menuList.appendChild(customersDataBtn);

    const cartsDataBtn = createMenuBtn(cartsDataName);
    menuList.appendChild(cartsDataBtn);

    const ordersDataBtn = createMenuBtn(ordersDataName);
    menuList.appendChild(ordersDataBtn);

    const productItemsBtn = createMenuBtn(productItemsName);
    menuList.appendChild(productItemsBtn);

    // Add menu to wrapper:
    menuWrapper.appendChild(menuList);

    return menuWrapper;
};

const renderMenu = () => {
    clearContainerRight();
    const menu = createMenu();
    containerRightNode.appendChild(menu);
};

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

// COMMANDS

displayTables();
renderMenu();
