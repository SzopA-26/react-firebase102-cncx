import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBZuH9GiuA91WPaNyoVTdHHRywxoEmtqnI",
    authDomain: "react-firebase-102-cncx.firebaseapp.com",
    databaseURL: "https://react-firebase-102-cncx-default-rtdb.firebaseio.com",
    projectId: "react-firebase-102-cncx",
    storageBucket: "react-firebase-102-cncx.appspot.com",
    messagingSenderId: "133686405034",
    appId: "1:133686405034:web:03e7470582aa6a3b08edd3",
    measurementId: "G-B1MHLC443J"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const database = firebase.database();
export const firestore = firebase.firestore();