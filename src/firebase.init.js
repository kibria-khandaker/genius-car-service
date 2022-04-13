// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB16wlNQGbgMZ-TEkIRdkGG9iDeT30x5Xo",
  authDomain: "genius-car-service-m60.firebaseapp.com",
  projectId: "genius-car-service-m60",
  storageBucket: "genius-car-service-m60.appspot.com",
  messagingSenderId: "7611699482",
  appId: "1:7611699482:web:5c0ccdd25c71158616dca3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
