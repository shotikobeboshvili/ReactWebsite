// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbR8XfXZGiKqTl5QI-SukSYxIADlPJGUc",
  authDomain: "realtor-clone-react-28957.firebaseapp.com",
  projectId: "realtor-clone-react-28957",
  storageBucket: "realtor-clone-react-28957.firebasestorage.app",
  messagingSenderId: "712502603913",
  appId: "1:712502603913:web:3296e42832ab4932541658"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();