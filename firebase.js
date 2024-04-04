// import necessary firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

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

//first get the storyData from the form
const madlibForm = document.getElementById("madlibForm");

//then add an event listener that waits for the user to submit data, and save it to our database
madlibForm.addEventListener("submit", (event) => {
  event.preventDefault(); // this line keeps the page from refreshing when you hit submit
  db.collection("stories").add({
      timestamp: Date.now(),
      story: document.getElementById("story").innerHTML,
      adjective1: madlibForm.adjective1.value,
      adjective2: madlibForm.adjective2.value,
      adjecive3: madlibForm.adjective3.value,
      noun1: madlibForm.noun1.value,
      noun2: madlibForm.noun2.value,
      noun3: madlibForm.noun3.value,
      noun4: madlibForm.noun4.value,
      name: madlibForm.name.value,
      verb1: madlibForm.verb1.value,
      verb2: madlibForm.verb2.value,
      verb3: madlibForm.verb3.value,
  })
  console.log("story added to db!");
}