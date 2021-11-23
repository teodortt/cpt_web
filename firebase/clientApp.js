

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
    //   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    //   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    //   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    //   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    //   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    //   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    apiKey: "AIzaSyB2cONuSWxqCFW1qHtjqPsdBHWxIo26Dx0",
    authDomain: "cpt-new.firebaseapp.com",
    projectId: "cpt-new",
    storageBucket: "cpt-new.appspot.com",
    messagingSenderId: "980458828817",
    appId: "1:980458828817:web:d2356d6aad57855a44adb0",
    measurementId: "G-PRT10KK6W0"
};

if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
}

export default firebase;
