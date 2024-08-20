// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWlCkytF9QRhyvfBFRWCGFdNQGMK1tftY",
  authDomain: "flashcards-27331.firebaseapp.com",
  projectId: "flashcards-27331",
  storageBucket: "flashcards-27331.appspot.com",
  messagingSenderId: "839216325111",
  appId: "1:839216325111:web:0875c7e0fe36c9a0f74ef2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db