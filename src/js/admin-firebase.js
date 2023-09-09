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
}
