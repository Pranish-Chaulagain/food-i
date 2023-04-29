// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5aJXOp68D_Eqfx9xUipf4pzMbjO4Zx1s",
  authDomain: "foodi-authentication.firebaseapp.com",
  projectId: "foodi-authentication",
  storageBucket: "foodi-authentication.appspot.com",
  messagingSenderId: "317774537243",
  appId: "1:317774537243:web:40ea4d1eb639545e3a0ebe",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
