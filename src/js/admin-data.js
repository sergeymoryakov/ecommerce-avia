// Preliminary Specification for Aviation Parts Marketplace

// Common keys for all DB elements:
// transDate: Transaction Date - set at the time of element creation,
// transId: Transaction ID - set at the time of element creation and
// used in Firestore two times for each document: as a Document ID
// and as a key (for convenience reading);

export const usersData = [
    // {
    //     id: "User ID",
    //     custId: "Customer ID",
    //     userName: "User Name",
    //     userSetDate: "Date Set",
    //     userAddress: "User Address",
    //     userPhone: "User Phone",
    //     userEmail: "User Email",
    //     userActive: "User Active",
    //     userAdmin: "User Admin",
    // },
    {
        id: "1001",
        custId: "c001",
        userName: "Mattew Yampolski",
        userAddress: "2023, Cactus Road, Springdale, FL, 33761 USA",
        userPhone: "+1 898 9289289",
        userEmail: "matt.y@aerosupplyplus.aero",
        userActive: true,
        userAdmin: true,
        transDate: "20230815",
        transId: "jkjur-tewvn-00001",
    },
];

// Comments to "usersData":
// id: User ID, set automatically at time of creation (type - TBD);
// custId: Customer ID, selected automatically at time of creation (type - TBD);
// userSetDate: User Setup Date, set automatically at time of creation (date);
// userAddress: User Address (string);
// userPhone: User Contact Phone (string/phone);
// userEmail: User Contact Email (string/email);
// userActive: User Active Status (boolean);
// userAdmin: User Admin Status (boolean);

// ID RANGES:
// id: 0001 - 1000 reserved
// id: 1001 ->
// custId: C001 ->
// custCode: XX, XXX, XXXXX
// orderId: 000000 - 100000 reserved
// orderId: 100001 ->
// invoiceId: B100001 -> (linked to orderId)
// creditId: CR100001 -> (linked to invoiceId)
// transId: 100000000 ->
// itemId: 0001-0001 ->

export const customersData = [
    // {
    //     id: "Customer ID",
    //     custCode: "Customer Code",
    //     custSetDate: "Date Set",
    //     custLegalName: "Legal Name",
    //     custAddress: "Address",
    //     custBillToAddress: "Bill-To-Address",
    //     custPhone: "Customer Phone",
    //     custEmail: "Customer Email",
    //     custContactId: "User ID",
    //     custKycChecked: "KYC Checked",
    //     custKycDate: "Date KYC",
    //     custPaymentTerms: "Payment Terms",
    //     custPaymentMethod: "Payment Method",
    //     custHandlingFee: "Handling Fee",
    //     custActive: "Customer Active",
    //     custOrders: "Customer Orders",
    // },
    {
        id: "c001",
        custCode: "aespl",
        custLegalName: "AeroSupplyPlus LLC",
        custAddress: "2023, Cactus Road, Springdale, FL, 33761 USA",
        custBillToAddress: "2023, Cactus Road, Springdale, FL, 33761 USA",
        custPhone: "+1 898 9289289",
        custEmail: "supply@aerosupplyplus.aero",
        custContactId: "1001",
        custKycChecked: true,
        custKycDate: "20230812",
        custPaymentTerms: ["wire", "card", "net30"],
        custPaymentMethod: "card",
        custHandlingFee: 0.015,
        custActive: true,
        custOrders: ["100001", "100002", "100003"],
        transDate: "20230812",
        transId: "jkjur-tewvn-00002",
    },
];

// Comments to "customersData":
// id: Customer ID, set automatically at time of creation (type - TBD);
// custCode: Customer Code, set as IATA 2-digit, ICAO 3-digit, or cusom 5-digit code;
// custSetDate: Customer Setup Date, set automatically at time of creation (date);
// custLegalName: Customer Legal Name (string);
// custAddress: Customer Legal Address (string);
// custBillToAddress: Customer Bill-To Address (string);
// custPhone: Customer Contact Phone (string/phone);
// custEmail: Customer Contact Email (string/email);
// custContactId: Primary Contact's ID (type - TBD/string);
// custKycChecked: Customer KYC Check Status (boolean);
// custKycDate: Customer KYC Check Date (date);
// custPaymentTerms: Customer Approved Payment Terms (array of strings - TBD);
// TBD NOTE: other "custPaymentTerms" options: "wire", "card", "net30";
// custPaymentMethod: Customer Preffered Payment Method (string);
// NOTE: Select "custPaymentMethod" from approved "custPaymentTerms" options;
// custHandlingFee: Customer Approved Handling Fee - set individually in range 0...3.5% (number/percent);
// custActive: Customer Active Status (boolean);
// custOrders: Customer Orders (array of Order IDs - TBD)

export const productItems = [
    // {
    //     id: "Item ID",
    //     itemSetDate: "Set Date",
    //     itemName: "Item Name",
    //     itemCat: "Category",
    //     itemImg: "Image",
    //     itemPN: "Part Number",
    //     itemSN: "Serial Number",
    //     itemPrice: "Price",
    //     itemQty: "Quantity",
    //     itemCurrency: "Currency",
    //     itemCondition: "Condition",
    //     itemCertification: "Certification",
    //     itemLeadTime: "Lead Time",
    //     itemDescription: "Description",
    // },
    {
        id: "0032-0001-000",
        itemName: "Wheel Main Assy",
        itemCat: "component",
        itemImg: "",
        itemPN: "BS30-737NG-3254",
        itemSN: "various",
        itemPrice: 18130.0,
        itemQty: 50,
        itemCurrency: "$",
        itemCondition: "New",
        itemCertification: ["EASA", "FAA", "CAAC"],
        itemLeadTime: "on stock",
        itemDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
        transDate: "20230812",
        transId: "jkjur-tewvn-00003",
    },
    {
        id: "0032-0002-000",
        itemName: "Wheel Nose Assy",
        itemCat: "component",
        itemImg: "",
        itemPN: "BS30-737NG-3390",
        itemSN: "various",
        itemPrice: 10680.0,
        itemQty: 50,
        itemCurrency: "$",
        itemCondition: "New",
        itemCertification: ["EASA", "FAA", "CAAC"],
        itemLeadTime: "On Stock",
        itemDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
        transDate: "20230812",
        transId: "jkjur-tewvn-00004",
    },
    {
        id: "0032-0001-100",
        itemName: "Wheel Main Assy",
        itemCat: "component",
        itemImg: "",
        itemPN: "GY30-737NG-9001",
        itemSN: "various",
        itemPrice: 18630.0,
        itemQty: 1,
        itemCurrency: "$",
        itemCondition: "New",
        itemCertification: ["EASA", "FAA", "CAAC"],
        itemLeadTime: "On Stock",
        itemDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
        transDate: "20230825",
        transId: "jkjur-tewvn-00005",
    },
    {
        id: "0079-0001-000",
        itemName: "Filter Assy Oil",
        itemCat: "component",
        itemImg: "",
        itemPN: "123-98418-2752",
        itemSN: "various",
        itemPrice: 12690.0,
        itemQty: 5,
        itemCurrency: "$",
        itemCondition: "New",
        itemCertification: ["EASA", "FAA", "CAAC"],
        itemLeadTime: "On Stock",
        itemDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
        transDate: "20230815",
        transId: "jkjur-tewvn-00006",
    },
    {
        id: "0079-0002-000",
        itemName: "Filter Element",
        itemCat: "part",
        itemImg: "",
        itemPN: "123-98418-9999",
        itemSN: "various",
        itemPrice: 650.0,
        itemQty: 50,
        itemCurrency: "$",
        itemCondition: "New",
        itemCertification: ["EASA", "FAA", "CAAC"],
        itemLeadTime: "On Stock",
        itemDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
        transDate: "20230815",
        transId: "jkjur-tewvn-00007",
    },
    {
        id: "0025-0001-000",
        itemName: "Seat Block Assy",
        itemCat: "component",
        itemImg: "",
        itemPN: "SA7428-777-3000",
        itemSN: "various",
        itemPrice: 27490.0,
        itemQty: 500,
        itemCurrency: "$",
        itemCondition: "New",
        itemCertification: ["EASA", "FAA", "CAAC", "UK CAA"],
        itemLeadTime: "60 Days",
        itemDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
        transDate: "20230816",
        transId: "jkjur-tewvn-00008",
    },
    {
        id: "1000-0001-000",
        itemName: "Handbook, Aviation Maintenance Technician - General",
        itemCat: "manual",
        itemImg: "",
        itemPN: "FAA-H-8083-30-ATB",
        itemSN: "not applicable",
        itemPrice: 97.0,
        itemQty: 50,
        itemCurrency: "$",
        itemCondition: "Serviceable",
        itemCertification: ["FAA"],
        itemLeadTime: "On Stock",
        itemDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
        transDate: "20230820",
        transId: "jkjur-tewvn-00009",
    },
];

// Comments to "productItems":
// id: Item ID, set automatically at time of creation (type - TBD);
// itemSetDate: Item Setup Date, set automatically at time of item creation (date);
// itemName: Item Name (string);
// itemCat: Item Category (sting - pick one from the follwoing options: "part", "component", "module", "consumable", "book", "aircraft");
// itemImg: Item Image Link (link/src);
// itemPN: Item Part Number (string);
// itemSN: Item Serial Number (string);
// itemQty: Maximum Item Quantity available for order (number/integer);
// itemPrice: Item Price Per Unit (number/accounting - TBD);
// itemCurrency: Item Currency ("S" - default for aviation products);
// itemCondition: Item Condition (sting - pick one from the follwoing options: "New", "Overhauled", "Inspected/Tested", "Serviceable", "Unserviceable");
// itemCertification: Item Certification (array of stings: "EASA", "FAA", "CAAC", "UK CAA", "CAA Canada" - pick minimum one from list);
// itemLeadTime: Item Availability/Lead Time (sting - pick one from the follwoing options: "On Stock", "7 Days", "30 Days", "60 Days", "90 Days");
// itemDescription: Item Description;

export const cartsData = [
    // {
    //     userId: "User ID",
    //     itemsId: "Order ID",
    // },
    {
        userId: "1001",
        cart: [
            {
                itemId: "",
                qty: "",
            },
        ],
        transDate: "20230830",
        transId: "jkjur-tewvn-00010",
    },
];

export const ordersData = [
    // {
    //     id: "Order ID",
    //     orderCustId: "Customer ID",
    //     orderUserId: "User ID",
    //     orderDateSet: "Date Set",
    //     orderDatePlaced: "Date Placed",
    //     orderDateReady: "Date Ready",
    //     orderDateCompleted: "Date Completed",
    //     orderBillTo: "Bill To",
    //     orderPaymentMethod: "Payment Method",
    //     orderPaymentDeadline: "Payment Deadline",
    //     orderPaymentDone: "Payment Done",
    //     orderCart: "Order Cart",
    //     orderPriceItems: "Price Items",
    //     orderPriceHandling: "Price Handling",
    //     orderPriceTotal: "Price Total",
    //     orderCurrency: "Currency",
    // },
    {
        id: "100001",
        orderCustId: "c001",
        orderUserId: "1001",
        orderDatePlaced: "20230828",
        orderDateReady: "20230828",
        orderDateCompleted: "20230829",
        orderBillTo: {
            custLegalName: "AeroSupplyPlus LLC",
            custBillToAddress: "2023, Cactus Road, Springdale, FL, 33761 USA",
            custContactName: "Mattew Yampolski",
            custPhone: "+1 898 9289289",
            custEmail: "supply@aerosupplyplus.aero",
        },
        orderPaymentMethod: "card",
        orderPaymentDeadline: "20230829",
        orderPaymentDone: "20230828",
        orderCart: [
            {
                itemId: "",
                itemPrice: "",
                qty: "",
            },
        ],
        orderPriceItems: 1374982.0,
        orderPriceHandling: 378.0,
        orderPriceTotal: 1375360.0,
        orderCurrency: "$",
        transDate: "20230828",
        transId: "jkjur-tewvn-00011",
    },
    {
        id: "100002",
        orderCustId: "c001",
        orderUserId: "1001",
        orderDatePlaced: "20230828",
        orderDateReady: "20230828",
        orderDateCompleted: "20230829",
        orderBillTo: {
            custLegalName: "AeroSupplyPlus LLC",
            custBillToAddress: "2023, Cactus Road, Springdale, FL, 33761 USA",
            custContactName: "Mattew Yampolski",
            custPhone: "+1 898 9289289",
            custEmail: "supply@aerosupplyplus.aero",
        },
        orderPaymentMethod: "card",
        orderPaymentDeadline: "20230829",
        orderPaymentDone: "20230828",
        orderCart: [
            {
                itemId: "",
                itemPrice: "",
                qty: "",
            },
        ],
        orderPriceItems: 1374982.0,
        orderPriceHandling: 378.0,
        orderPriceTotal: 1375360.0,
        orderCurrency: "$",
        transDate: "20230828",
        transId: "jkjur-tewvn-00012",
    },
    {
        id: "100003",
        orderCustId: "c001",
        orderUserId: "1001",
        orderDatePlaced: "20230828",
        orderDateReady: "20230828",
        orderDateCompleted: "20230829",
        orderBillTo: {
            custLegalName: "AeroSupplyPlus LLC",
            custBillToAddress: "2023, Cactus Road, Springdale, FL, 33761 USA",
            custContactName: "Mattew Yampolski",
            custPhone: "+1 898 9289289",
            custEmail: "supply@aerosupplyplus.aero",
        },
        orderPaymentMethod: "card",
        orderPaymentDeadline: "20230829",
        orderPaymentDone: "20230828",
        orderCart: [
            {
                itemId: "",
                itemPrice: "",
                qty: "",
            },
        ],
        orderPriceItems: 1374982.0,
        orderPriceHandling: 378.0,
        orderPriceTotal: 1375360.0,
        orderCurrency: "$",
        transDate: "20230828",
        transId: "jkjur-tewvn-00013",
    },
];

// Comments to "ordersData":
// id: Order ID, set automatically at time of creation (type - TBD);
// orderCustId: Order Customer ID, set automatically at time of creation (type - TBD);
// orderUserId: Order User ID, set automatically at time of creation (type - TBD);
// orderDateSet: Order Day Set, set automatically at time of creation (type - TBD);
// orderDatePlaced: Order Day Placed, set automatically at time of placement (type - TBD);
// orderDateReady: Order Day Ready for pickup, set automatically at "orderDatePlaced + 1 day" (type - TBD);
// orderDateCompleted: Order Day Completed, set random at "orderDatePlaced + 1...10 days" (type - TBD);
// orderPaymentMethod: Order Payment Method selected from array ["wire", "card", "net30"] at time of placement (string);
// orderPaymentDeadline: Order Payment Deadline, set at time of placement: same day for "wire" and "card", and "current + 30" for "net30" (type - Date);
// orderPaymentDone: Order Payment Date, actual payment date (type - Date);
// orderCart: Order Items (Cart), set at time of creation and includes: "itemId", "itemPrice", "qty" (array of objects);
// Note: For simplicity "orderCart" does not specify SN and does not include other details. Might be reconsidered for production quality;
// orderPriceItems: Order Items Price, set automatically at time of placement (number/accounting);
// orderPriceHandling: Order Handling Fee Price, set automatically at time of placement (number/accounting);
// orderPriceTotal: Order Total Price, set automatically at time of placement (number/accounting);
