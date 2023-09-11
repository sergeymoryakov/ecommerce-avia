
// Refactored admin-view.js

// Function to display a collection
function displayCollection(collectionData) {
    // Loop through each record in the collection
    for (const record of collectionData) {
        // Loop through each field in the record
        for (const [key, value] of Object.entries(record)) {
            // Display the key and value
            console.log(`Key: ${key}, Value: ${value}`);
        }
    }
}

// Sample usage
const usersData = [ /* ... */ ];
const customersData = [ /* ... */ ];
const cartsData = [ /* ... */ ];
const cartItemsData = [ /* ... */ ];
const ordersData = [ /* ... */ ];
const orderItemsData = [ /* ... */ ];

displayCollection(usersData);
displayCollection(customersData);
displayCollection(cartsData);
displayCollection(cartItemsData);
displayCollection(ordersData);
displayCollection(orderItemsData);
