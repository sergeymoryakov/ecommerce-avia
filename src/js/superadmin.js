import { customersData, productItems, usersData, ordersData } from "./data.js";

const containerLeftNode = document.getElementById("containerLeft");
const containerRightNode = document.getElementById("containerRight");

console.log("Module linked succesfully");
console.log(customersData);

createHeaderRow = (object) => {
    const newHeaderRow = document.createElement("tr");
    // newHeaderRow.className = `${object}`;
    for (const [key, value] of Object.entries(object)) {
        const newHeaderElement = document.createElement("th");
        newHeaderElement.innerText = `${key}`;

        newHeaderRow.appendChild(newHeaderElement);
    }
    return newHeaderRow;
};

createDataRow = (object) => {
    const newDataRow = document.createElement("tr");
    // newDataRow.className = `${object}`;
    for (const [key, value] of Object.entries(object)) {
        const newDataElement = document.createElement("td");
        newDataElement.innerText = `${value}`;

        newDataRow.appendChild(newDataElement);
    }
    return newDataRow;
};

createTable = (array) => {
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

clearContainerLeft = () => {
    containerLeftNode.innerHTML = "";
};

clearContainerRight = () => {
    containerRightNode.innerHTML = "";
};

renderTable = (array, title) => {
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

displayTables = () => {
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
