export class ViewAdmin {
    constructor() {}
    checkModuleLinkage = () => {
        console.log("HELLO, ViewAdmin is connected!");
    };

    createPopupMessage = (messageArray) => {
        // Create main wrapper div
        const messageWrapper = document.createElement("div");
        messageWrapper.classList.add("popup-welcome-wrapper");

        // Use Object.entries to iterate over welcomeDisclamer object
        messageArray.forEach((element) => {
            const paragraph = document.createElement("p");
            paragraph.innerText = element;

            // Append para to the main wrapper
            messageWrapper.appendChild(paragraph);
        });

        // Create and append AGREE button
        const agreeButton = document.createElement("button");
        agreeButton.classList.add("update-btn");
        agreeButton.setAttribute("id", "agreeBtn");
        agreeButton.innerText = "I Agree";

        messageWrapper.appendChild(agreeButton);

        return messageWrapper;
    };

    createPopupUpdateAddress = () => {
        // Create the main wrapper div
        const popupAddress = document.createElement("div");
        popupAddress.classList.add("popup-address");

        // Array containing the input fields and their properties
        const inputFields = [
            {
                label: "Company Name",
                name: "custLegalName",
                type: "text",
                placeholder: "AeroSupplyPlus LLC",
            },
            {
                label: "Company Address",
                name: "custAddress",
                type: "text",
                placeholder:
                    "Suite 2023, Cactus Road, Springdale, FL, 33761 USA",
            },
            {
                label: "Company Contact",
                name: "custContactName",
                type: "text",
                placeholder: "Matthew Yampolski",
            },
            {
                label: "Company Contact Phone",
                name: "custPhone",
                type: "tel",
                placeholder: "+1 898 928928928",
            },
            {
                label: "Company Contact Email",
                name: "custEmail",
                type: "email",
                placeholder: "supply@aerosupplyplus.aero",
            },
        ];

        // Loop through the array and create each input field
        inputFields.forEach((field) => {
            const itemWrapper = document.createElement("div");
            itemWrapper.classList.add("popup-item-wrapper");

            const label = document.createElement("label");
            label.setAttribute("for", field.name);
            label.innerText = field.label;

            const input = document.createElement("input");
            input.setAttribute("type", field.type);
            input.setAttribute("name", field.name);
            input.setAttribute("placeholder", field.placeholder);

            // Append the label and input to the item wrapper
            itemWrapper.appendChild(label);
            itemWrapper.appendChild(input);

            // Append the item wrapper to the main wrapper
            popupAddress.appendChild(itemWrapper);
        });

        // Create and append the update button
        const updateButton = document.createElement("button");
        updateButton.classList.add("update-btn");
        updateButton.setAttribute("id", "updateAddressBtn");
        updateButton.innerText = "Update";

        popupAddress.appendChild(updateButton);

        return popupAddress;
    };

    createPopupUpdatePaymentMethod = (paymentMethods) => {
        // Create the main wrapper div
        const popupPaymentMethod = document.createElement("div");
        popupPaymentMethod.classList.add("popup-payment-method");

        // Use Object.entries to iterate over paymentMethods object
        Object.entries(paymentMethods).forEach(([key, value], index) => {
            const radioDiv = document.createElement("div");

            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "method");
            input.setAttribute("id", key);
            input.setAttribute("value", value);

            // If this is the first radio button, set it to be checked by default
            if (index === 0) {
                input.checked = true;
            }

            const label = document.createElement("label");
            label.setAttribute("for", key);
            label.innerText = value;

            // Append the input and label to the div
            radioDiv.appendChild(input);
            radioDiv.appendChild(label);

            // Append the div to the main wrapper
            popupPaymentMethod.appendChild(radioDiv);
        });

        // Create and append the update button
        const updateButton = document.createElement("button");
        updateButton.classList.add("update-btn");
        updateButton.setAttribute("id", "updatePaymentMethodBtn");
        updateButton.innerText = "Update";

        popupPaymentMethod.appendChild(updateButton);

        return popupPaymentMethod;
    };
}
