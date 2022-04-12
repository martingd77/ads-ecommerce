// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYzwVrxcFTvXnvRYODzfMukRodEi1Cz-4",
  authDomain: "ads-ecommerce.firebaseapp.com",
  projectId: "ads-ecommerce",
  storageBucket: "ads-ecommerce.appspot.com",
  messagingSenderId: "1068722676667",
  appId: "1:1068722676667:web:14463ed89bc26080755a9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFireStore(app);
export default database;