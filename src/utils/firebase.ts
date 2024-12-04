// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC8dsKlFKtggEB-2bRQkah7FjKVwLhXbcA",
    authDomain: "prakmobile-responsi.firebaseapp.com",
    projectId: "prakmobile-responsi",
    storageBucket: "prakmobile-responsi.firebasestorage.app",
    messagingSenderId: "869649369703",
    appId: "1:869649369703:web:70990ecbed850d910462c2"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };