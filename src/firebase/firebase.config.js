// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEHGyKRqMlAFJXemg7bIZUfEAqasbMoe0",
  authDomain: "simple-firebase-email-password.firebaseapp.com",
  projectId: "simple-firebase-email-password",
  storageBucket: "simple-firebase-email-password.appspot.com",
  messagingSenderId: "719248599733",
  appId: "1:719248599733:web:943fcd134c0b9a5e976cfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;