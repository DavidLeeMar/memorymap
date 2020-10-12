// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import * as firebase from 'firebase';
import API from './apikey.js';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";
//test



var firebaseConfig = {
  apiKey: API,
  authDomain: "memorymapdm.firebaseapp.com",
  databaseURL: "https://memorymapdm.firebaseio.com",
  projectId: "memorymapdm",
  storageBucket: "memorymapdm.appspot.com",
  messagingSenderId: "325356274690",
  appId: "1:325356274690:web:77d79bc91a93509dd7531b",
  measurementId: "G-3X8HFV01SC"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database()

module.exports = database;