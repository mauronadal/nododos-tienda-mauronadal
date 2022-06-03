
import { initializeApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvfeULUFh32hhxLytM4FOS3iCgRXdSMus",
  authDomain: "tiendacoder-2bf34.firebaseapp.com",
  projectId: "tiendacoder-2bf34",
  storageBucket: "tiendacoder-2bf34.appspot.com",
  messagingSenderId: "521440993514",
  appId: "1:521440993514:web:5543d20241e2ab00717793",
  measurementId: "G-DZKEBR0WX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);