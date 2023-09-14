// SET VIEW MODULE:
export class AdminView {
    constructor() {
        this.containerLeftNode = document.getElementById("containerLeft");
        this.containerRightNode = document.getElementById("containerRight");

        // For Test - TBS only:
        this.testBtnNode = document.getElementById("testBtn");
        this.backupBtnNode = document.getElementById("backupBtn");
        this.getServerBtnNode = document.getElementById("getServerBtn");
        this.getLocalBtnNode = document.getElementById("getLocalBtn");
    }
    checkModuleLinkage = () => {
        console.log("HELLO, AdminView is connected!");
    };

    clearContainerLeft = () => {
        this.containerLeftNode.innerHTML = "";
    };

    clearContainerRight = () => {
        this.containerRightNode.innerHTML = "";
    };

    createHeaderRow = (doc) => {
        const newHeaderRow = document.createElement("tr");

        // create two empty elements and add as first child:
        const newEmptyElement1 = document.createElement("th");
        newEmptyElement1.classList = "db-section__table_cell";
        newHeaderRow.appendChild(newEmptyElement1);
        const newEmptyElement2 = document.createElement("th");
        newEmptyElement2.classList = "db-section__table_cell";
        newHeaderRow.appendChild(newEmptyElement2);

        // create header cells in loop
        for (const [key, value] of Object.entries(doc)) {
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

    // NOTE: isBackup - a backupInstancevalidator:
    // 0 - dataInstance
    // 1 - backupInstance
    createDataRow = (doc, arrayName, isBackup) => {
        // FOR TBS ONLY:
        // console.log("doc.id: ", doc.id);
        // console.log("doc.docId: ", doc.docId);

        const newDataRow = document.createElement("tr");

        // create two button elements and add as first child:
        const newButtonElement1 = document.createElement("td");
        newButtonElement1.classList = "db-section__table_cell";
        const newButton1 = document.createElement("button");
        newButton1.classList = "db-section__table_btn add-btn";
        newButton1.id = `${isBackup}_${arrayName}_${doc.docId}_addBtn`;
        newButton1.innerText = "+";
        newButtonElement1.appendChild(newButton1);
        newDataRow.appendChild(newButtonElement1);

        const newButtonElement2 = document.createElement("td");
        newButtonElement2.classList = "db-section__table_cell";
        const newButton2 = document.createElement("button");
        newButton2.classList = "db-section__table_btn updt-btn";
        newButton2.id = `${isBackup}_${arrayName}_${doc.docId}_updtBtn`;
        newButton2.innerText = "u";
        newButtonElement2.appendChild(newButton2);
        newDataRow.appendChild(newButtonElement2);

        for (const [key, value] of Object.entries(doc)) {
            // Add table cell element, class and ID:
            const newDataElement = document.createElement("td");
            newDataElement.classList = "db-section__table_cell";
            newDataElement.id = `${isBackup}_${arrayName}_${doc.docId}_${key}`;

            const newInput = document.createElement("input");
            newInput.type = "text";
            newInput.id = `${isBackup}_${arrayName}_${doc.docId}_${key}_input`;
            newInput.value = `${value}`;

            newDataElement.appendChild(newInput);
            newDataRow.appendChild(newDataElement);
        }

        // Add another button element to the end of row:
        const newButtonElement3 = document.createElement("td");
        newButtonElement3.classList = "db-section__table_cell";
        const newButton3 = document.createElement("button");
        newButton3.classList = "db-section__table_btn del-btn";
        newButton3.id = `${isBackup}_${arrayName}_${doc.docId}_delBtn`;
        newButton3.innerText = "-";
        newButtonElement3.appendChild(newButton3);
        newDataRow.appendChild(newButtonElement3);

        return newDataRow;
    };

    createTable = (array, arrayName, isBackup) => {
        // Create new Table
        const newTable = document.createElement("table");

        // create Header Row and add to Table:
        const headerRow = this.createHeaderRow(array[0]);
        newTable.appendChild(headerRow);

        // create Data Rows and add to Table
        for (const doc of array) {
            const dataRow = this.createDataRow(doc, arrayName, isBackup);
            newTable.appendChild(dataRow);
        }
        return newTable;
    };

    renderTable = (array, arrayName, isBackup) => {
        const tableWrapper = document.createElement("div");
        tableWrapper.classList = "db-section";

        const tableTitle = document.createElement("h2");
        tableTitle.classList = "db-section__title";
        tableTitle.id = `${isBackup}_${arrayName}`;
        tableTitle.innerText = arrayName;

        const table = this.createTable(array, arrayName, isBackup);
        table.classList = "db-section__table";

        tableWrapper.appendChild(tableTitle);
        tableWrapper.appendChild(table);

        this.containerLeftNode.appendChild(tableWrapper);
    };

    createMenuBtn = (arrayName) => {
        const menuBtnWrapper = document.createElement("li");
        menuBtnWrapper.classList = "menu-btn-wrapper";

        const menuBtn = document.createElement("a");
        menuBtn.classList = "menu-btn";
        menuBtn.href = `#${arrayName}`;
        menuBtn.innerText = `${arrayName}`;

        menuBtnWrapper.appendChild(menuBtn);
        return menuBtnWrapper;
    };

    createMenu = (collectionNames) => {
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

        for (const arrayName of collectionNames) {
            const newBtn = this.createMenuBtn(arrayName);
            menuList.appendChild(newBtn);
        }

        // Add menu to wrapper:
        menuWrapper.appendChild(menuList);

        return menuWrapper;
    };

    renderMenu = (collectionNames) => {
        this.clearContainerRight();
        const menu = this.createMenu(collectionNames);
        this.containerRightNode.appendChild(menu);
    };
}
