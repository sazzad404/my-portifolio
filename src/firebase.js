// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuElHyAl2c-JA2R-Q5PuJwUJ-G6Wrgkjs",
  authDomain: "sazzad-portfolio-admin.firebaseapp.com",
  projectId: "sazzad-portfolio-admin",
  storageBucket: "sazzad-portfolio-admin.firebasestorage.app",
  messagingSenderId: "670417911760",
  appId: "1:670417911760:web:894ef7cedd4459f45883d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const logOut = () => signOut(auth);
