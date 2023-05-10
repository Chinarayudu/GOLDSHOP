// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB3aeahxpl4KZksNG8QanQMKUbFPohTtqw",
  authDomain: "svjw-8ffb3.firebaseapp.com",
  projectId: "svjw-8ffb3",
  storageBucket: "svjw-8ffb3.appspot.com",
  messagingSenderId: "103116192223",
  appId: "1:103116192223:web:411c03a646897dc409ec6a"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);

