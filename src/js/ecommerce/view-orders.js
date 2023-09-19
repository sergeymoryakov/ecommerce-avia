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
}
