//import firebase from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt_VyRVeQ31yhbCrA1eObohOhctqDTsLA",
  authDomain: "challenge-266d2.firebaseapp.com",
  projectId: "challenge-266d2",
  storageBucket: "challenge-266d2.appspot.com",
  messagingSenderId: "595146801959",
  appId: "1:595146801959:web:1d8e656e099b6e06949f02",
  measurementId: "G-M1Z9XBD958",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
