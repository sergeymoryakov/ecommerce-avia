import { AdminController } from "./admin-controller.js";

const adminApp = new AdminController();

try {
    adminApp.initializeAppMain();
} catch (error) {
    console.error("An error occured duting app initialization:", error);
    alert(
        "Something went wrong. Please contact the app admin or try again later."
    );
}
