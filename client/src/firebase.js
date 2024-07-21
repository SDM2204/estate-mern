// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-789bf.firebaseapp.com",
  projectId: "mern-estate-789bf",
  storageBucket: "mern-estate-789bf.appspot.com",
  messagingSenderId: "962405547534",
  appId: "1:962405547534:web:56ab2c24448c74075a065f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
