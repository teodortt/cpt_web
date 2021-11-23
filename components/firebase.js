import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB2cONuSWxqCFW1qHtjqPsdBHWxIo26Dx0",
  authDomain: "cpt-new.firebaseapp.com",
  projectId: "cpt-new",
  storageBucket: "cpt-new.appspot.com",
  messagingSenderId: "980458828817",
  appId: "1:980458828817:web:d2356d6aad57855a44adb0",
  measurementId: "G-PRT10KK6W0"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db, firebase };
