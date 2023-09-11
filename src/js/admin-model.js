// SET MODEL MODULE:
export class AdminModel {
    constructor() {}
    checkModuleLinkage = () => {
        console.log("HELLO, AdminModel is connected!");
    };

    // New ID Generator:
    generateNewId(length) {
        return [...Array(length)]
            .map(() =>
                Math.floor(Math.random() * 36)
                    .toString(36)
                    .toUpperCase()
            )
            .join("");
    }
}
