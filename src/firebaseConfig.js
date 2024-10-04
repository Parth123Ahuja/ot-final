// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjyqforlB_uImn-srpjBElM8nAKkWWjAY",
  authDomain: "organicmatkife.firebaseapp.com",
  projectId: "organicmatkife",
  storageBucket: "organicmatkife.appspot.com",
  messagingSenderId: "102439570531",
  appId: "1:102439570531:web:6fa60682d99441a2a67c56",
  measurementId: "G-ZB3SJE4399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

const analytics = getAnalytics(app);
