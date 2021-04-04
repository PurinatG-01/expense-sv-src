import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_8uLiOVl0Q7HOxBlpSdAcbA6jV2zatS8",
    authDomain: "expense-sv.firebaseapp.com",
    projectId: "expense-sv",
    storageBucket: "expense-sv.appspot.com",
    messagingSenderId: "484954172945",
    appId: "1:484954172945:web:1daefd5f05d4634c1f0bb0",
    measurementId: "G-6K66EZ5S32"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
