import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC8cNC73tsp5CbypBpzCARnY7-Vb-1jbVk",
    authDomain: "proyecto-final-d1090.firebaseapp.com",
    projectId: "proyecto-final-d1090",
    storageBucket: "proyecto-final-d1090.firebasestorage.app",
    messagingSenderId: "358672254757",
    appId: "1:358672254757:web:4200bdbdacc538c637fccc"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

