import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCWautRpQ9s_NFMX0I0C-VKnzGceNn8EvE",
    authDomain: "hypercart-6f73b.firebaseapp.com",
    projectId: "hypercart-6f73b",
    storageBucket: "hypercart-6f73b.firebasestorage.app",
    messagingSenderId: "29441993564",
    appId: "1:29441993564:web:822975124e59beb43bef99"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }