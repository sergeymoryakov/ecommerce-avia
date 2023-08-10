// Preliminary Specification for Aviation Parts Marketplace

export const customersData = [
    {
        custId: "",
        custSetDate: "",
        custLegalName: "AeroSupplyPlus LLC",
        custAddress: "2023, Cactus Road, Springdale, FL, 33761 USA",
        custBillToAddress: "2023, Cactus Road, Springdale, FL, 33761 USA",
        custPhone: "+1 898 9289289",
        custEmail: "supply@aerosupplyplus.aero",
        custContactName: "Mattew Yampolski",
        custKycChecked: true,
        custKycDate: "",
        custPaymentTerms: ["wire", "card", "Net30"],
        custPaymentMethod: "card",
        custHandlingFee: 0.015,
        custStatus: "active",
        customerOrders: "",
    },
];

// Comments to "customersData":
// custId: Customer ID, set automatically at time of creation (type - TBD);
// custSetDate: Customer Setup Date, set automatically at time of creation (date);
// custLegalName: Customer Legal Name (string);
// custAddress: Customer Legal Address (string);
// custBillToAddress: Customer Bill-To Address (string);
// custPhone: Customer Contact Phone (string/phone);
// custEmail: Customer Contact Email (string/email);
// custContactName: Customer Contact Name (string);
// custKycChecked: Customer KYC Check Status (boolean);
// custKycDate: Customer KYC Check Date (date);
// custPaymentTerms: Customer Approved Payment Terms (array of strings - TBD);
// TBD NOTE: other "custPaymentTerms" options: "wire", "card", "net30";
// custPaymentMethod: Customer Preffered Payment Method (string);
// NOTE: Select "custPaymentMethod" from approved "custPaymentTerms" options;
// custHandlingFee: Customer Approved Handling Fee - set individually in range 0...3.5% (number/percent);
// custStatus: Customer Status (string: "active"/"inactive");
// customerOrders: Customer Orders (array of Order IDs - TBD)

export const productItems = [
    {
        itemID: "",
        itemSetDate: "",
        itemName: "Wheel Main Assy",
        itemImg: "",
        itemPN: "BS30-737NG-3254",
        itemSN: "030-48621R",
        itemPrice: 18130.0,
        itemQty: 50,
        itemCurrency: "$",
        itemCondition: "New",
        itemCertification: ["EASA", "FAA", "CAAC"],
        itemLeadTime: "On Stock",
        itemDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
    },
    {
        itemID: "",
        itemSetDate: "",
        itemName: "Filter Assy Fuel",
        itemPN: "123-98418-2752",
        itemSN: "1498P174",
        itemPrice: 12690.0,
        itemQty: 3,
        itemCurrency: "$",
        itemCondition: "New",
        itemCertification: ["EASA", "FAA"],
        itemLeadTime: "On Stock",
        itemDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
    },
    {
        itemID: "",
        itemSetDate: "",
        itemName: "Seat Block Assy",
        itemPN: "SA7428-777-3000",
        itemSN: "777-7428-3-0095",
        itemPrice: 27490.0,
        itemQty: 1000,
        itemCurrency: "$",
        itemCondition: "New",
        itemCertification: ["EASA", "FAA", "CAAC", "UK CAA"],
        itemLeadTime: "60 Days",
        itemDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
    },
    {
        itemID: "",
        itemSetDate: "",
        itemName: "Engine Module Fan Assy",
        itemPN: "CF38-10E-2491849-04",
        itemSN: "72-872048",
        itemPrice: 984270.0,
        itemQty: 1,
        itemCurrency: "$",
        itemCondition: "Serviceable",
        itemCertification: ["EASA", "FAA"],
        itemLeadTime: "On Stock",
        itemDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
    },
];

// Comments to "productItems":
// itemID: Item ID, set automatically at time of creation (type - TBD);
// itemSetDate: Item Setup Date, set automatically at time of item creation (date);
// itemName: Item Name (string);
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

export const ordersData = [
    {
        orderID: "",
        orderCustID: "",
        orderDateSet: "",
        orderDatePlaced: "",
        orderDateReady: "",
        orderDateCompleted: "",
        orderBillTo: {
            custLegalName: "AeroSupplyPlus LLC",
            custBillToAddress: "2023, Cactus Road, Springdale, FL, 33761 USA",
            custContactName: "Mattew Yampolski",
            custPhone: "+1 898 9289289",
            custEmail: "supply@aerosupplyplus.aero",
        },
        orderPaymentMethod: "card",
        orderCart: [
            {
                itemID: "",
                itemPrice: "",
                qty: "",
            },
        ],
        orderPriceItems: 1374982.0,
        orderPriceHandling: 378.0,
        orderPriceTotal: 1375360.0,
    },
];

// Comments to "ordersData":
// orderID: Order ID, set automatically at time of creation (type - TBD);
// orderDateSet: Order Day Set, set automatically at time of creation (type - TBD);
// orderDatePlaced: Order Day Placed, set automatically at time of placement (type - TBD);
// orderDateReady: Order Day Ready for pickup, set automatically at "orderDatePlaced + 1 day" (type - TBD);
// orderDateCompleted: Order Day Completed, set random at "orderDatePlaced + 1...10 days" (type - TBD);
// orderCart: Order Items (Cart), set at time of creation and includes: "itemID", "itemPrice", "qty" (array of objects);
// Note: For simplicity "orderCart" does not specify SN and does not include other details. Might be reconsidered for production quality;
// orderPriceItems: Order Items Price, set automatically at time of placement (number/accounting);
// orderPriceHandling: Order Handling Fee Price, set automatically at time of placement (number/accounting);
// orderPriceTotal: Order Total Price, set automatically at time of placement (number/accounting);
