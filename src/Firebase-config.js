import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "blog-app-53383.firebaseapp.com",
  projectId: "blog-app-53383",
  storageBucket: "blog-app-53383.firebasestorage.app",
  messagingSenderId: "611977278362",
  appId: "1:611977278362:web:66ebb690932e9f83ba4023"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();