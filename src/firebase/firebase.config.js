// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW2jYPR6jWREM3NO_WUfhOahhZ2EO9RF4",
  authDomain: "auth-travel-guru-4db0f.firebaseapp.com",
  projectId: "auth-travel-guru-4db0f",
  storageBucket: "auth-travel-guru-4db0f.appspot.com",
  messagingSenderId: "549317506035",
  appId: "1:549317506035:web:fe1036a74c06e8b1399886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)