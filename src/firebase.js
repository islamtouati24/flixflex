// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB588UpAe1_shLTimo5p-OloKop1tulTw0",

  authDomain: "flixflex-30f0c.firebaseapp.com",

  projectId: "flixflex-30f0c",

  storageBucket: "flixflex-30f0c.appspot.com",

  messagingSenderId: "47189434711",

  appId: "1:47189434711:web:14ef5a84fad73a63cf1e12",

  measurementId: "G-0H9803QQLS",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);

export { analytics, auth };
