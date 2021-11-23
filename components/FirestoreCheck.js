// import firebase from 'firebase/app';
// import "firebase/auth";
import { db } from './firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


export const addCode = async ({ code, percent }) => {

    db.collection('cpt')
        .doc('general')
        .collection('codes')
        .add({
            code: code,
            percent: percent,
            date: new Date(),
        });
};

export const manualLogin = async ({ email, password }) => {
    await firebase.auth()
        .signInWithEmailAndPassword('uhb5775@gmail.com', '12qw12qw').then((userCredential) => {
            // Signed in
            var res = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(error.message)
        });
    // return res.user;
};

export function findIt(query) {
    var nummers = db.collection("cpt").doc("general").collection('codes').where('code', '==', query);
    nummers.get().then((querySnapshot) => {
        if (!querySnapshot.empty) {

            querySnapshot.forEach(function (doc) {
                // console.log(doc.id, ' => ', doc.data());
                setResults(doc.data());
            });
        } else {
            alert("no data")
        }
    });
}