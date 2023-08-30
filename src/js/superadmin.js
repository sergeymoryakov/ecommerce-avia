import { usersData } from "./data";

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaafzn29XLZBor7sXmsi3PMDsg_cxcakk",
    authDomain: "ecommerce-c2b5f.firebaseapp.com",
    projectId: "ecommerce-c2b5f",
    storageBucket: "ecommerce-c2b5f.appspot.com",
    messagingSenderId: "267989030227",
    appId: "1:267989030227:web:28088cbcc5c292d8eebda6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/

console.log("Hi, superadmin module linked succesfully");

// console.log(usersData);
// console.log(usersData[0]);
// console.log(usersData[0].userId, ":", usersData[1].userId);
// console.log(usersData[0].userName, ":", usersData[1].userName);
// console.log(usersData[0].userEmail, ":", usersData[1].userEmail);
// console.log(usersData[0].userAddress, ":", usersData[1].userAddress);

for (const user of usersData) {
    console.log("New User Object:");
    for (const [key, value] of Object.entries(user)) {
        console.log(`${key}: ${value}`);
        // console.log(`Field name: ${key}, Field value: ${value}`);
    }
}
