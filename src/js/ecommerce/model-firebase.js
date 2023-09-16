// Import the functions you need from the SDKs you need
import { firebaseConfig } from "../common/constants";
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    updateDoc,
    doc,
    setDoc,
    deleteDoc,
    updateDoc,
    // query,
    // orderBy,
} from "firebase/firestore";

// FOR TEST AND TBS - IMAGES
// import { getStorage } from "firebase/storage";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// FOR TEST AND TBS - IMAGES
// const storage = getStorage(app);

export class ModelFirebase {
    constructor() {}
    checkModuleLinkage = () => {
        console.log("HELLO, ModelFirebase is connected!");
    };

    get = async (collectionName) => {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const newCollection = [];
        querySnapshot.forEach((doc) => {
            // console.log(`docId: "${doc.id}"`);
            const newCollectionItem = {};
            newCollectionItem["docId"] = doc.id;
            const data = doc.data();
            for (const field in data) {
                newCollectionItem[field] = data[field];
                // console.log(`${field}: "${data[field]}",`);
            }
            newCollection.push(newCollectionItem);
        });
        // console.log(newCollection);
        return newCollection;
    };

    addDocToFirestore = async (collectionName, item) => {
        try {
            const docRef = doc(db, collectionName, item.docId);
            await setDoc(docRef, item);
            console.log(
                "Item/document succesfully added with docId: ",
                item.docId
            );
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    updateDocInFirestore = async (collectionName, item) => {
        try {
            const docRef = doc(db, collectionName, item.docId);
            await updateDoc(docRef, item);
            console.log(
                "Item/document succesfully updated in Firestore, docId: ",
                item.docId
            );
        } catch (error) {
            console.error("Error updating document in Firestore: ", error);
        }
    };

    deleteDocFromFirestore = async (collectionName, itemId) => {
        try {
            await deleteDoc(doc(db, collectionName, itemId));
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };

    checkImageUrls = () => {
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const imagesRef = storageRef.child("images"); // assuming 'images' is the folder name

        // List all elements (files and folders) under the folder
        imagesRef
            .listAll()
            .then((result) => {
                result.items.forEach((imageRef) => {
                    // For each item, get its download URL and then you can do something with it
                    imageRef
                        .getDownloadURL()
                        .then((url) => {
                            // Create a mapping or array here to associate the name with its URL
                            console.log(`Name: ${imageRef.name}, URL: ${url}`);
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
