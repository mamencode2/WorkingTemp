import { initializeApp, getApps, getApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB57frHxA8pWbNAO7LiUpfyv1o_84VoF0k",
  authDomain: "phoneauth-9edfe.firebaseapp.com",
  projectId: "phoneauth-9edfe",
  storageBucket: "phoneauth-9edfe.appspot.com",
  messagingSenderId: "153122563291",
  appId: "1:153122563291:web:ba0c6b13dda0254b2a58fe",
  measurementId: "G-3BDP70ND53"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();
export { app, auth, db, storage };