import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from '@firebase/auth';

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBQTuS5svguqX5B73b8bWa6XBs5qyR3C90",
    authDomain: "uas-pbf-789ff.firebaseapp.com",
    projectId: "uas-pbf-789ff",
    storageBucket: "uas-pbf-789ff.appspot.com",
    messagingSenderId: "431322272502",
    appId: "1:431322272502:web:3d8b84b89fbcae544e52d7"
});

export default firebaseConfig;