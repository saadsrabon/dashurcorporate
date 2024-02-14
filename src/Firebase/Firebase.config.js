/* eslint-disable no-undef */


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.SBUCKET,
  // messagingSenderId: process.env.MSID,
  // appId: process.env.APPID,
  apiKey: "AIzaSyBB5xPj55h0ZGDTbcLF2TSuv5DJ1cX8UpM",
  authDomain: "dashurcorporate.firebaseapp.com",
  projectId: "dashurcorporate",
  storageBucket: "dashurcorporate.appspot.com",
  messagingSenderId: "540908129340",
  appId: "1:540908129340:web:baf08e3bf9131187e0c739",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;