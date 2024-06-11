// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8xF3bNzAqSEkZhLWLm3CMEqDUsFOKZG0",
    authDomain: "significachallenge.firebaseapp.com",
    projectId: "significachallenge",
    storageBucket: "significachallenge.appspot.com",
    messagingSenderId: "247864742486",
    appId: "1:247864742486:web:3cec13ee18f0d90748a1f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}