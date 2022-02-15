// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBC_RZom6qqtGr3sA0d7Ot6w3QtkehYWz0",
    authDomain: "reactjs-69439.firebaseapp.com",
    projectId: "reactjs-69439",
    storageBucket: "reactjs-69439.appspot.com",
    messagingSenderId: "855929106299",
    appId: "1:855929106299:web:fe948e08d055722bc617de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);