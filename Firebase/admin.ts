// initialize the application

import {getApps,cert,initializeApp} from 'firebase-admin/app';
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from "firebase-admin/firestore";

const initFirebaseAdmin=() => {
    //below line helps to get access to firebase application
    const apps = getApps();
    // below code ensures that sdk is not initialized more than once
    if(!apps.length){
        initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?. replace(/\\n/g, "\n")
            })
        })
    }
    return {
        auth: getAuth(),
        db: getFirestore()
    }
}
export const { auth, db}= initFirebaseAdmin();