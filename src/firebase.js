// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyACsO28Fn9Yqgn8KKDPeB6APCe3T8yBGFg",
  authDomain: "upload-images-charts.firebaseapp.com",
  projectId: "upload-images-charts",
  storageBucket: "upload-images-charts.appspot.com",
  messagingSenderId: "908033173702",
  appId: "1:908033173702:web:e2efa73724a8a6bf404fc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app)
export default app;