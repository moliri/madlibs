// import necessary firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

import { createMadLib } from "./script.js";

console.log("firebase imports complete");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKPb7V2xsGrZvd2hXp2Enuj1haTEIoLi4",
  authDomain: "madlibs-bb9af.firebaseapp.com",
  projectId: "madlibs-bb9af",
  storageBucket: "madlibs-bb9af.appspot.com",
  messagingSenderId: "622424206247",
  appId: "1:622424206247:web:2939814263e699eeb86482",
};

// initialize app and database
const app = initializeApp(firebaseConfig);
var db = getFirestore(app);
console.log("firebase setup complete!");

// add storyData to database
const stories = doc(db, "stories/newStory");
function writeStorytoDB() {
  const storyData = createMadLib();
  setDoc(stories, storyData, { merge: true });
}

writeStorytoDB();
console.log("story added to db!");
