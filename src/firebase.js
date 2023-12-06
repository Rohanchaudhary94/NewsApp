// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEUE-0q2lPNK3wIACYVfP6QzwiTDjJ61o",
  authDomain: "newsapp-f74da.firebaseapp.com",
  projectId: "newsapp-f74da",
  storageBucket: "newsapp-f74da.appspot.com",
  messagingSenderId: "761976564970",
  appId: "1:761976564970:web:205e397bc9eb1b58c73b93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)