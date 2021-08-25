// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJVHhHwmVDmwLEEdGaaeaM8K76uRNav0E",
  authDomain: "tic-tok-clone-f6410.firebaseapp.com",
  projectId: "tic-tok-clone-f6410",
  storageBucket: "tic-tok-clone-f6410.appspot.com",
  messagingSenderId: "279298067859",
  appId: "1:279298067859:web:80df525cb8cc7f1a8c6c66",
  measurementId: "G-V90N1QWTSY"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
export default db;