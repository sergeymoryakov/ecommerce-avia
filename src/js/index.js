import { Controller } from "./controller.js";

const app = new Controller();

try {
    app.initializeAppMain();
} catch (error) {
    console.error("An error occured duting app initialization:", error);
    alert(
        "Something went wrong. Please contact the app admin or try again later."
    );
}
