// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4GS7xLlMpSq_J2QW0F0AlVsf271V1BX0",
  authDomain: "post-cbc08.firebaseapp.com",
  projectId: "post-cbc08",
  storageBucket: "post-cbc08.appspot.com",
  messagingSenderId: "87952107178",
  appId: "1:87952107178:web:ca2e7303d365848303d2d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)