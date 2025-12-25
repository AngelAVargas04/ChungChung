// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// used for everytime you want to start an app with firebase
import { getAnalytics } from "firebase/analytics";
// this import tracks user behavior
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// this import is for authentication

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); // for google authentication
// exporting auth and provider to be used in other files

export default app;