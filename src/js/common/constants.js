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

// TEST-TBS: REMOVE FOR PROD
export const messageArrayTest = [
    "This is TEST",
    "TEST-TEST-TEST-TEST-TEST-TEST-TEST-TEST",
];

export const welcomeDisclaimer = [
    "Dear Guest,",
    "Welcome to the Aviation eCommerce application. This project has been developed by Seppo.digital studio, utilizing plain JavaScript and Google Firestore for educational purposes.",
    "Please note that all names, contacts, and products displayed are fictitious and do not represent real individuals, companies, or products.",
    "You are welcome to browse, select products, interact with the cart, and even make test purchases for demonstration purposes.",
    "For security and data protection reasons, the feature to update the 'Bill to Address' during the order placement stage has been deactivated. However, you can still experiment with selecting different payment methods at this stage.",
    "If you have any comments or would like to share your experience with using this application, please feel free to contact the development team at https://github.com/sergeymoryakov or seppo.digital@gmail.com.",
];

export const errorInsufficientPermission = [
    "Oops, something went wrong!",
    "It appears you have insufficient permission rights.",
    "Please contact your organization's purchasing approver to resolve this issue.",
    "We sincerely apologize for the inconvenience.",
];

export const errorEmptyCart = [
    "Hold on a moment!",
    "It looks like your cart is empty.",
    "Add some items to your cart to continue with the checkout process.",
];
