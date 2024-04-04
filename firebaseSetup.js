// import necessary libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore-compat.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKPb7V2xsGrZvd2hXp2Enuj1haTEIoLi4",
  authDomain: "madlibs-bb9af.firebaseapp.com",
  projectId: "madlibs-bb9af",
  storageBucket: "madlibs-bb9af.appspot.com",
  messagingSenderId: "622424206247",
  appId: "1:622424206247:web:2939814263e699eeb86482",
};

// initialize app
const app = initializeApp(firebaseConfig);
// initialize database
var db = getFirestore(app);
