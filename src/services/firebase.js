// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC-uJwwkzCkxHJrICpMZGiKhlhj3JIkOc",
  authDomain: "academia-hub.firebaseapp.com",
  projectId: "academia-hub",
  storageBucket: "academia-hub.appspot.com",
  messagingSenderId: "142845490257",
  appId: "1:142845490257:web:9d0a1a0e82b3c608c0b470",
  measurementId: "1:142845490257:web:9d0a1a0e82b3c608c0b470",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, provider, db, storage };
