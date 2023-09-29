export class ModelCart {
    constructor(controller) {
        this.controller = controller;
    }
    checkModuleLinkage = () => {
        console.log("HELLO, ModelCart is connected!");
    };
}
