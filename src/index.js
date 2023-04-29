import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


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