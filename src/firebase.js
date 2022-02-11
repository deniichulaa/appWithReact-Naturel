// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ84vVRflsHoi62Txd4OqycdDcQ6fHP1c",
  authDomain: "tienda-naturel.firebaseapp.com",
  projectId: "tienda-naturel",
  storageBucket: "tienda-naturel.appspot.com",
  messagingSenderId: "96704399697",
  appId: "1:96704399697:web:d7d530a9f59cb25cac2b70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);