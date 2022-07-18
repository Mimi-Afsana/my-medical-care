// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlSVXquGjlWUoACwpmccOTzk43MtgDm98",
  authDomain: "single-doctor-website.firebaseapp.com",
  projectId: "single-doctor-website",
  storageBucket: "single-doctor-website.appspot.com",
  messagingSenderId: "1031874599288",
  appId: "1:1031874599288:web:447deef6accae3ba23908d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
