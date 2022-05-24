import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from '@firebase/auth';

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDSEE48jrP5O63pOMGeqHH2DMDr1zbuWPo",
    authDomain: "pertemuan-11-16271.firebaseapp.com",
    projectId: "pertemuan-11-16271",
    storageBucket: "pertemuan-11-16271.appspot.com",
    messagingSenderId: "995213747816",
    appId: "1:995213747816:web:01dd52a02f51d06756bddd"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;