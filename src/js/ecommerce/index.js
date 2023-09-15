import { Controller } from "./controller";

const App = new Controller();

try {
    App.initializeAppMain();
} catch (error) {
    console.error("An error occured duting app initialization:", error);
    alert(
        "Something went wrong. Please contact the app admin or try again later."
    );
}
