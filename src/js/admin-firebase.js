// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getFirestore,
    collection,
    getDocs,
    // updateDoc,
    // doc,
    // setDoc,
    // deleteDoc,
    // query,
    // orderBy,
} from "firebase/firestore";

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
console.log(app);
console.log(db);

// SET MODEL MODULE:
export class AdminFirebase {
    constructor() {}
    checkModuleLinkage = () => {
        console.log("HELLO, AdminFirebase is connected!");
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
}

// const ref = collection(db, "usersData");
// const q = query(ref);

// const usersDataDb = [];
// const querySnapshot = await getDocs(q);
