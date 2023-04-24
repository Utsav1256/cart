import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCBiaQxaOvnEb49ALMIJ-1DIpmfUxMzOBw",
  authDomain: "cart-f2bc0.firebaseapp.com",
  projectId: "cart-f2bc0",
  storageBucket: "cart-f2bc0.appspot.com",
  messagingSenderId: "538471658851",
  appId: "1:538471658851:web:e77081618db2ba04ea4f56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// - Instead of the following code from v8
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// - Use this to import firebase to your application:
// import firebase from 'firebase/compat/ap