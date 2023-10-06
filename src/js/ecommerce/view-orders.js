export class ViewOrders {
    constructor(controller) {
        this.controller = controller;
    }
    checkModuleLinkage = () => {
        console.log("HELLO, ViewOrders is connected!");
    };

    // Right Container - Create Orders History Title
    createOrdersHistoryTitle = () => {
        const title = document.createElement("h2");
        title.classList = "order-list-title";
        title.innerText = "Orders";
        return title;
    };

    // Right Container - Render Order Links
    createOrdersHistorySummary = (sessionIdOrders) => {
        const ordersHistorySummary = this.createOrdersHistoryTitle();

        const ordersWrapper = document.createElement("div");
        ordersWrapper.classList = "orders-list";
        for (const order of sessionIdOrders) {
            const orderBtn = document.createElement("button");
            orderBtn.classList = "order-number-btn";
            orderBtn.id = `order_${order.orderId}`;
            orderBtn.innerText = order.orderId;

            ordersWrapper.appendChild(orderBtn);
        }

        ordersHistorySummary.appendChild(ordersWrapper);

        // TEST-TBS - REMOVE FO PROD
        // console.log("ordersHistorySummary: ", ordersHistorySummary);

        return ordersHistorySummary;
    };

    // Right Container - Create OrderSummaryContentBlock
    createOrderSummaryPriceBlock = (sessionIdCartPrice, orderButton) => {
        const orderSummary = document.createElement("div");
        orderSummary.classList = "order-summary";

        const title = document.createElement("h3");
        title.classList = "order-summary-title";
        title.innerText = "Order Summary";

        const itemsWrapper = document.createElement("div");
        itemsWrapper.classList = "flex-between";

        const itemsTitle = document.createElement("p");
        itemsTitle.innerText = "Items:";

        const itemsAmount = document.createElement("p");
        itemsAmount.innerText = `$${sessionIdCartPrice.priceItems}`;

        const handlingWrapper = document.createElement("div");
        handlingWrapper.classList = "flex-between";

        const handlingTitle = document.createElement("p");
        handlingTitle.innerText = "Handling:";

        const handlingAmount = document.createElement("p");
        handlingAmount.innerText = `$${sessionIdCartPrice.priceHandling}`;

        const totalWrapper = document.createElement("div");
        totalWrapper.classList = "flex-between bold";

        const totalTitle = document.createElement("p");
        totalTitle.innerText = "Total:";

        const totalAmount = document.createElement("p");
        totalAmount.innerText = `$${sessionIdCartPrice.priceTotal}`;

        itemsWrapper.appendChild(itemsTitle);
        itemsWrapper.appendChild(itemsAmount);

        handlingWrapper.appendChild(handlingTitle);
        handlingWrapper.appendChild(handlingAmount);

        totalWrapper.appendChild(totalTitle);
        totalWrapper.appendChild(totalAmount);

        orderSummary.appendChild(title);
        orderSummary.appendChild(itemsWrapper);
        orderSummary.appendChild(handlingWrapper);
        orderSummary.appendChild(totalWrapper);

        if (orderButton) {
            orderSummary.appendChild(this.createPlaceOrderButtonBlock());
        }

        return orderSummary;
    };

    // Right Container - Create PlaceOrderButtonBlock
    createPlaceOrderButtonBlock = () => {
        const wrapper = document.createElement("div");
        wrapper.classList = "place-order-btn-wrapper";

        const button = document.createElement("button");
        button.classList = "place-order-btn";
        button.innerText = "Place Order";

        wrapper.appendChild(button);

        return wrapper;
    };

    // Left Container - Create createCheckOutWrapper
    createCheckOutWrapper = () => {
        const checkOutWrapper = document.createElement("div");
        checkOutWrapper.classList = "checkout-wrapper";

        const goBackBtn = document.createElement("button");
        goBackBtn.classList = "goto-cart-btn";
        goBackBtn.innerText = "< Back to Cart";

        checkOutWrapper.appendChild(goBackBtn);

        return checkOutWrapper;
    };

    // Left Container - Create createOrderWrapper
    createOrderWrapper = (orderDetailsToDisplay) => {
        const orderWrapper = document.createElement("div");
        orderWrapper.classList = "order-wrapper";

        const goBackBtn = document.createElement("button");
        goBackBtn.classList = "goto-products-btn";
        goBackBtn.innerText = "< Back to Products";

        const title = document.createElement("h2");
        title.classList = "order-number";
        title.innerText = `Order # ${orderDetailsToDisplay.orderId}`;

        orderWrapper.appendChild(goBackBtn);
        orderWrapper.appendChild(title);

        return orderWrapper;
    };

    // Left Container - Create BillToAddressContentBlock
    createBillToAddressContentBlock = (sessionIdCartDetails, updateButton) => {
        const addressWrapper = document.createElement("div");
        addressWrapper.classList = "address-wrapper";

        const title = document.createElement("h3");
        title.classList = "address-title";
        title.innerText = "Bill to Address";

        const custLegalName = document.createElement("p");
        custLegalName.innerText = sessionIdCartDetails.custLegalName;

        const custBillToAddress = document.createElement("p");
        custBillToAddress.innerText = sessionIdCartDetails.custBillToAddress;

        const userName = document.createElement("p");
        userName.innerText = sessionIdCartDetails.userName;

        const userPhone = document.createElement("p");
        userPhone.innerText = sessionIdCartDetails.userPhone;

        const userEmail = document.createElement("p");
        userEmail.innerText = sessionIdCartDetails.userEmail;

        addressWrapper.appendChild(title);
        addressWrapper.appendChild(custLegalName);
        addressWrapper.appendChild(custBillToAddress);
        addressWrapper.appendChild(userName);
        addressWrapper.appendChild(userPhone);
        addressWrapper.appendChild(userEmail);

        if (updateButton) {
            addressWrapper.appendChild(this.createUpdateButtonBlock());
        }

        return addressWrapper;
    };

    // Left Container - Create PaymentMethodContentBlock
    createPaymentMethodContentBlock = (sessionIdCartDetails, updateButton) => {
        const paymentMethodWrapper = document.createElement("div");
        paymentMethodWrapper.classList = "payment-method-wrapper";

        const title = document.createElement("h3");
        title.classList = "payment-method-title";
        title.innerText = "Payment Method";

        const paymentMethod = document.createElement("p");
        paymentMethod.innerText = sessionIdCartDetails.paymentMethod;

        paymentMethodWrapper.appendChild(title);
        paymentMethodWrapper.appendChild(paymentMethod);

        if (updateButton) {
            paymentMethodWrapper.appendChild(this.createUpdateButtonBlock());
        }

        return paymentMethodWrapper;
    };

    // Left Container - createCheckOutCartWrapper
    createCheckOutCartWrapper = () => {
        const checkOutCartWrapper = document.createElement("div");
        checkOutCartWrapper.classList = "checkout-cart-wrapper";

        const title = document.createElement("h3");
        title.classList = "checkout-cart-title";
        title.innerText = "Cart";

        // const cartItemsWrapper = document.createElement("div");
        // cartItemsWrapper.classList = "checkout-cart-items";

        checkOutCartWrapper.appendChild(title);
        // checkOutCartWrapper.appendChild(cartItemsWrapper);

        return checkOutCartWrapper;
    };

    // Left Container - Create UpdateButtonBlock
    createUpdateButtonBlock = () => {
        const wrapper = document.createElement("div");
        wrapper.classList = "update-btn-wrapper";

        const button = document.createElement("button");
        button.classList = "update-btn";
        button.innerText = "Update";

        wrapper.appendChild(button);

        return wrapper;
    };

    createPopupUpdateAddress = () => {
        const updateAddress = `                
                <div class="popup-address">
                    <div class="popup-item-wrapper">
                        <label for="custLegalName">Company Name</label>
                        <input
                            type="text"
                            name="custLegalName"
                            id=""
                            placeholder="AeroSupplyPlus LLC"
                        />
                    </div>
                    <div class="popup-item-wrapper">
                        <label for="custAddress">Company Address</label>
                        <input
                            type="text"
                            name="custAddress"
                            id=""
                            placeholder="Suite 2023, Cactus Road, Springdale, FL, 33761 USA"
                        />
                    </div>
                    <div class="popup-item-wrapper">
                        <label for="custContactName">Company Contact</label>
                        <input
                            type="text"
                            name="custContactName"
                            id=""
                            placeholder="Mattew Yampolski"
                        />
                    </div>
                    <div class="popup-item-wrapper">
                        <label for="custPhone">Company Contact Phone</label>
                        <input
                            type="tel"
                            name="custPhone"
                            id=""
                            placeholder="+1 898 928928928"
                        />
                    </div>
                    <div class="popup-item-wrapper">
                        <label for="custEmail">Company Contact Email</label>
                        <input
                            type="email"
                            name="custEmail"
                            id=""
                            placeholder="supply@aerosupplyplus.aero"
                        />
                    </div>
                    <button class="update-btn" id="updateAddressBtn">Update</button>
                </div>`;
        return updateAddress;
    };

    createPopupUpdatePaymentMethod = () => {
        const updatePaymentMethod = `
            <div class="popup-payment-method">
                <div>
                    <input
                        type="radio"
                        name="method"
                        id="wire"
                        value="C.I.A. Wire transfer."
                    />
                    <label for="wire">C.I.A. Wire transfer.</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="method"
                        id="card"
                        value="C.I.A. Company credit card."
                    />
                    <label for="card">C.I.A. Company credit card.</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="method"
                        id="net30"
                        value="Net30. Pay within 30 calendar days."
                    />
                    <label for="net30"
                        >Net30. Pay within 30 calendar days.</label
                    >
                </div>
                <button class="update-btn" id="updatePaymentMethodBtn">Update</button>
            </div>
        `;
        return updatePaymentMethod;
    };
}
