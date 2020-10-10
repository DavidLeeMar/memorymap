// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "memory-map-289523.firebaseapp.com",
  databaseURL: "https://memory-map-289523.firebaseio.com",
  projectId: "memory-map-289523",
  storageBucket: "memory-map-289523.appspot.com",
  messagingSenderId: "1071936718149",
  appId: "1:1071936718149:web:0ee27f5c53d438ce9eaa2c",
  measurementId: "G-CTD3ERH3TJ"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database()

module.exports = database;