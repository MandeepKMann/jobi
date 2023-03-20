import { initializeApp } from 'firebase/app';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAawesbQ382THVifbAmWjcfqvgOCyYWuFE",
  authDomain: "jobi-48337.firebaseapp.com",
  databaseURL: "https://jobi-48337-default-rtdb.firebaseio.com",
  projectId: "jobi-48337",
  storageBucket: "jobi-48337.appspot.com",
  messagingSenderId: "844729266263",
  appId: "1:844729266263:web:ce29adea0133135cb5b312"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);