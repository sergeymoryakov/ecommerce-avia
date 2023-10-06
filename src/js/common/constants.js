export const dbCollectionNames = [
    "usersData",
    "customersData",
    "cartsData",
    "ordersData",
    "orderItemsData",
    "productItems",
];

export const integerNames = [
    "custHandlingFee",
    "qty",
    "orderPriceHandling",
    "orderPriceItems",
    "orderPriceTotal",
    "itemPrice",
    "itemQty",
];

export const paymentMethods = {
    wire: "C.I.A. Wire transfer.",
    card: "C.I.A. Company credit card.",
    net30: "Net30. Pay within 30 calendar days.",
};

// IMPORT TO MODEL-FIREBASE.JS REMOVED FOR TEST-TBS // FOR PROD RE-ACTIVATE
export const firebaseConfig = {
    apiKey: "AIzaSyAaafzn29XLZBor7sXmsi3PMDsg_cxcakk",
    authDomain: "ecommerce-c2b5f.firebaseapp.com",
    projectId: "ecommerce-c2b5f",
    storageBucket: "ecommerce-c2b5f.appspot.com",
    messagingSenderId: "267989030227",
    appId: "1:267989030227:web:28088cbcc5c292d8eebda6",
};
