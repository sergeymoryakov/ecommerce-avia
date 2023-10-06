export class ViewAdmin {
    constructor() {}
    checkModuleLinkage = () => {
        console.log("HELLO, ViewAdmin is connected!");
    };

    createPopupMessage = (messageArray) => {
        // Create main wrapper div
        const messageWrapper = document.createElement("div");
        messageWrapper.classList.add("popup-welcome-wrapper");

        // const messageArray = [
        //     "This is TEST",
        //     "TEST-TEST-TEST-TEST-TEST-TEST-TEST-TEST"
        // ];

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

    // createPopupWelcomeDisclamer = (messageArray) => {
    //     // Create main wrapper div
    //     const welcomeWrapper = document.createElement("div");
    //     welcomeWrapper.classList.add("popup-welcome-wrapper");

    //     // const messageArray = [
    //     //     "Dear Guest,",
    //     //     "Welcome to the Aviation eCommerce application. This project has been developed by Seppo.digital studio, utilizing plain JavaScript and Google Firestore for educational purposes.",
    //     //     "Please note that all names, contacts, and products displayed are fictitious and do not represent real individuals, companies, or products.",
    //     //     "You are welcome to browse, select products, interact with the cart, and even make test purchases for demonstration purposes.",
    //     //     "For security and data protection reasons, the feature to update the 'Bill to Address' during the order placement stage has been deactivated. However, you can still experiment with selecting different payment methods at this stage.",
    //     //     "If you have any comments or would like to share your experience with using this application, please feel free to contact the development team at https://github.com/sergeymoryakov or seppo.digital@gmail.com.",
    //     // ];

    //     // Use Object.entries to iterate over welcomeDisclamer object
    //     messageArray.forEach((element) => {
    //         const paragraph = document.createElement("p");
    //         paragraph.innerText = element;

    //         // Append para to the main wrapper
    //         welcomeWrapper.appendChild(paragraph);
    //     });

    //     // Create and append AGREE button
    //     const agreeButton = document.createElement("button");
    //     agreeButton.classList.add("update-btn");
    //     agreeButton.setAttribute("id", "agreeBtn");
    //     agreeButton.innerText = "I Agree";

    //     welcomeWrapper.appendChild(agreeButton);

    //     return welcomeWrapper;
    // };
}
