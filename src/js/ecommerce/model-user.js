export class ModelUser {
    constructor() {}
    checkModuleLinkage = () => {
        console.log("HELLO, ModelUser is connected!");
    };

    getSessionIdCustomerByCustomerId = (customerId, customersData) => {
        const sessionCustomerArray = customersData.filter(
            (customer) => customer.custId === customerId
        );
        return sessionCustomerArray[0];
    };
}
