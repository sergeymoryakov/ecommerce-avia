// Import the functions you need from the SDKs you need

// REMOVED FOR TEST & TBS / FOR PROD USE CONST FILE
// import { firebaseConfig } from "./constants";

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

// FOR TEST AND TBS - ADD STORAGE FOR IMAGES
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// FOR TEST & TBS INITIATE CONFIG / FOR PROD MOVE TO CONST FILE
const firebaseConfig = {
    apiKey: "AIzaSyAaafzn29XLZBor7sXmsi3PMDsg_cxcakk",
    authDomain: "ecommerce-c2b5f.firebaseapp.com",
    projectId: "ecommerce-c2b5f",
    storageBucket: "ecommerce-c2b5f.appspot.com",
    messagingSenderId: "267989030227",
    appId: "1:267989030227:web:28088cbcc5c292d8eebda6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// FOR TEST AND TBS - ADD STORAGE FOR IMAGES
// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = getStorage();
// OR THIS?
const storage = getStorage(app);

// Create a storage reference from our storage service
const storageRef = ref(storage);
// console.log("storageRef: ", storageRef);

// Create a child reference
const imagesRef = ref(storage, "images");
// imagesRef now points to 'images'
// console.log("imagesRef: ", imagesRef);

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

    getLinkToImage = async (imageName) => {
        return new Promise((resolve, reject) => {
            const specificImageRef = ref(storage, `images/${imageName}`);

            getDownloadURL(specificImageRef)
                .then((url) => {
                    resolve(url);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
}