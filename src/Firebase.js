// imports the firebase library and the firestore module from the firebase/compat package.
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// defining a firebaseConfig object that contains the configuration settings required to connect to the Firestore database. 
const firebaseConfig = {
  apiKey: "AIzaSyCBiaQxaOvnEb49ALMIJ-1DIpmfUxMzOBw",
  authDomain: "cart-f2bc0.firebaseapp.com",
  projectId: "cart-f2bc0",
  storageBucket: "cart-f2bc0.appspot.com",
  messagingSenderId: "538471658851",
  appId: "1:538471658851:web:e77081618db2ba04ea4f56"
};

// initializing the Firebase app by calling the initializeApp() method and passing the firebaseConfig object as an argument. 
// This creates a new Firebase app instance that can be used to access various Firebase services.
firebase.initializeApp(firebaseConfig)

// exporting a constant named Firestore that references the Firestore database instance.
//  This constant can be imported and used in other parts of the application to read and write data to the Firestore database.
//  The firestore() method is called on the firebase instance to create a new instance of the Firestore database.
export const Firestore = firebase.firestore();