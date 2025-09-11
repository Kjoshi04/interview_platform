// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import{ getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3cvd83S3k2c98R7GDYERw3V5OBLggQRU",
    authDomain: "vinterview-ae232.firebaseapp.com",
    projectId: "vinterview-ae232",
    storageBucket: "vinterview-ae232.firebasestorage.app",
    messagingSenderId: "168829518963",
    appId: "1:168829518963:web:f0b1e48f01dbe85080d606",
    measurementId: "G-LV1CCJ1Q1E"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth= getAuth(app);
export const db= getFirestore(app);
