import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfgfUUkpNKzAadZ-2umT2ESpO-BDusQOg",
  authDomain: "fastmed-80b9e.firebaseapp.com",
  projectId: "fastmed-80b9e",
  storageBucket: "fastmed-80b9e.firebasestorage.app",
  messagingSenderId: "862564634935",
  appId: "1:862564634935:web:b1a39124c10d5162914ab2",
  measurementId: "G-E1PRNBF92S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
