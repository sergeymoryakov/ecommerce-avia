import { customersData, productItems, usersData, ordersData } from "./data.js";

const containerLeftNode = document.getElementById("containerLeft");
const containerRightNode = document.getElementById("containerRight");

console.log("Module linked succesfully");

// Verification proper import:
console.log(customersData);

const createHeaderRow = (object) => {
    const newHeaderRow = document.createElement("tr");

    // create two empty elements and add as first child:
    const newEmptyElement1 = document.createElement("th");
    newHeaderRow.appendChild(newEmptyElement1);
    const newEmptyElement2 = document.createElement("th");
    newHeaderRow.appendChild(newEmptyElement2);

    // newHeaderRow.className = `${object}`;
    for (const [key, value] of Object.entries(object)) {
        const newHeaderElement = document.createElement("th");
        newHeaderElement.innerText = `${key}`;

        newHeaderRow.appendChild(newHeaderElement);
    }

    // Add another empty element at the end of the row:
    const newEmptyElement3 = document.createElement("th");
    newHeaderRow.appendChild(newEmptyElement3);

    return newHeaderRow;
};

const createDataRow = (object) => {
    const newDataRow = document.createElement("tr");

    // create two button elements and add as first child:
    const newButtonElement1 = document.createElement("td");
    newButtonElement1.innerText = "button";
    newDataRow.appendChild(newButtonElement1);
    const newButtonElement2 = document.createElement("td");
    newButtonElement2.innerText = "button";
    newDataRow.appendChild(newButtonElement2);

    // newDataRow.className = `${object}`;
    for (const [key, value] of Object.entries(object)) {
        const newDataElement = document.createElement("td");
        newDataElement.innerText = `${value}`;

        newDataRow.appendChild(newDataElement);
    }

    // Add another button element to the end of row:
    const newButtonElement3 = document.createElement("td");
    newButtonElement3.innerText = "button";
    newDataRow.appendChild(newButtonElement3);

    return newDataRow;
};

const createTable = (array) => {
    // Create new Table
    const newTable = document.createElement("table");

    // create Header Row and add to Table:
    const headerRow = createHeaderRow(array[0]);
    newTable.appendChild(headerRow);

    // create Data Rows and add to Table
    for (const object of array) {
        const dataRow = createDataRow(object);
        newTable.appendChild(dataRow);
    }
    return newTable;
};

const clearContainerLeft = () => {
    containerLeftNode.innerHTML = "";
};

const clearContainerRight = () => {
    containerRightNode.innerHTML = "";
};

const renderTable = (array, title) => {
    const tableWrapper = document.createElement("div");
    tableWrapper.classList = "admin-users";

    const tableTitle = document.createElement("h2");
    tableTitle.classList = "admin-users__title";
    tableTitle.innerText = title;

    const table = createTable(array);
    table.classList = "admin-users__table";

    tableWrapper.appendChild(tableTitle);
    tableWrapper.appendChild(table);
    console.log(tableWrapper);

    containerLeftNode.appendChild(tableWrapper);
};

const displayTables = () => {
    clearContainerLeft();
    renderTable(usersData, "Users");
    renderTable(customersData, "Customers");
    renderTable(productItems, "Products");
    renderTable(ordersData, "Orders");
};

displayTables();

// console.log(usersData[0].userId, ":", usersData[1].userId);

// Function: Render all keys and values of objects in array:
// renderArrayOfObjects = (array) => {
//     for (const object of array) {
//         console.log("New User Object:");
//         for (const [key, value] of Object.entries(object)) {
//             console.log(`${key}: ${value}`);
//             // console.log(`Field name: ${key}, Field value: ${value}`);
//         }
//     }
// };

// Call function:
// renderArrayOfObjects(productItems);
