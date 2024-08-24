import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeYaQJH-42vJV04lcyfE-uXAC4fZgfbgM",
  authDomain: "login-ccbd8.firebaseapp.com",
  projectId: "login-ccbd8",
  storageBucket: "login-ccbd8.appspot.com",
  messagingSenderId: "911677255122",
  appId: "1:911677255122:web:00cc5119be143b599e6c0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
