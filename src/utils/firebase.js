// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blogapp-412309.firebaseapp.com",
    projectId: "blogapp-412309",
    storageBucket: "blogapp-412309.appspot.com",
    messagingSenderId: "587547665466",
    appId: "1:587547665466:web:00071b6efec40eca404103",
    measurementId: "G-3WC1QCWXGC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);