import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
l
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
export const auth = getAuth(app);
export const db = getFirestore(app);
