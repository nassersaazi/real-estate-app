// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kahshaf-estate.firebaseapp.com",
  projectId: "kahshaf-estate",
  storageBucket: "kahshaf-estate.appspot.com",
  messagingSenderId: "3637360144",
  appId: "1:3637360144:web:65c20e02a156e09859fc95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);