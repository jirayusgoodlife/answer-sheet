import firebase from 'firebase/app'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyANrX-5CgZDZmoa2xS7JJDOI6BUwAP2oAY",
    authDomain: "simple-answer-sheet.firebaseapp.com",
    databaseURL: "https://simple-answer-sheet.firebaseio.com",
    projectId: "simple-answer-sheet",
    storageBucket: "simple-answer-sheet.appspot.com",
    messagingSenderId: "277125676234",
    appId: "1:277125676234:web:d22cebdff3f9f8a7c78833",
    measurementId: "G-V8TFXSL7GT"
};

// Get a RTDB instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .database()