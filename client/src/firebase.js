// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "import.meta.env.VITE_FIREBASE_API_KEY",
  authDomain: "blogging-mern.firebaseapp.com",
  projectId: "blogging-mern",
  storageBucket: "blogging-mern.appspot.com",
  messagingSenderId: "171889985415",
  appId: "1:171889985415:web:f2a983297866fbc3fc3522"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
