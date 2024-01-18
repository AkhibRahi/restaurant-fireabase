// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh_2_SQoM9Ks41Kw-IRY6NfSoSqn3meCc",
  authDomain: "restaurant-app-9591b.firebaseapp.com",
  databaseURL: "https://restaurant-app-9591b-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-9591b",
  storageBucket: "restaurant-app-9591b.appspot.com",
  messagingSenderId: "897060267932",
  appId: "1:897060267932:web:647a7e97f99ae55cac0a59"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export {app, db, storage}