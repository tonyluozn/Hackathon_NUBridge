import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyC25f3kIuhICYuZa7BuQZMd-hjRVC3TWnw",
    authDomain: "nubridge-aea26.firebaseapp.com",
    databaseURL: "https://nubridge-aea26.firebaseio.com",
    projectId: "nubridge-aea26",
    storageBucket: "nubridge-aea26.appspot.com",
    messagingSenderId: "504841612399",
    appId: "1:504841612399:web:533cc3944822897bf2f19a",
    measurementId: "G-Y3BGQPQVBV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const Auth = firebase.auth();

// How long does login status last
Auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);