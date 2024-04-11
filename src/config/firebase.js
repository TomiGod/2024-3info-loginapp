// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFVzH4cfPWHlEF9bNMPaP9BX2xx_AVh2g",
  authDomain: "applogin-6bcb2.firebaseapp.com",
  projectId: "applogin-6bcb2",
  storageBucket: "applogin-6bcb2.appspot.com",
  messagingSenderId: "91165780336",
  appId: "1:91165780336:web:40095af3a0fc91469387b5",
  measurementId: "G-3B5KT3V9XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);