// function createMadLib() {
//   // Get the user input from the form
//   console.log("createMadLib() called");
//   var adjective1 = document.getElementById("adjective1").value;
//   var adjective2 = document.getElementById("adjective2").value;
//   var adjective3 = document.getElementById("adjective3").value;

//   var noun1 = document.getElementById("noun1").value;
//   var noun2 = document.getElementById("noun2").value;
//   var noun3 = document.getElementById("noun3").value;
//   var noun4 = document.getElementById("noun4").value;

//   var name = document.getElementById("name").value;

//   var verb1 = document.getElementById("verb1").value;
//   var verb2 = document.getElementById("verb2").value;
//   var verb3 = document.getElementById("verb3").value;

//   // Create the story using the user input, and set the text inside our story element in the HTML to reflect the story
//   document.getElementById("story").innerHTML =
//     "It was a <u>" +
//     adjective1 +
//     "</u> Spring day. I woke up to the <u>" +
//     adjective2 +
//     "</u> smell of <u>" +
//     noun1 +
//     "</u> roasting in the oven downstairs. I <u>" +
//     verb1 +
//     "</u> down the stairs to see if I can help <u>" +
//     verb2 +
//     "</u> breakfast.  My mom said 'See if the neighbor, <u>" +
//     name +
//     "</u>,  has any fresh <u>" +
//     noun2 +
//     "</u>.' When I got there, I couldn't believe my <u>" +
//     noun3 +
//     "</u>! There was a <u>" +
//     adjective3 +
//     "</u> duck <u>" +
//     verb3 +
//     "</u> on the <u>" +
//     noun4 +
//     "</u>!";

//   // Save the completed story element as a string
//   var story = document.getElementById("story").innerHTML;

//   // add an event listener that will save the story as a JSON file
//   document
//     .getElementById("submitButton")
//     .addEventListener("click", function () {
//       // create JS object to store data first
//       var storyData = {
//         timestamp: Date.now(),
//         story: story,
//         adjective1: adjective1,
//         adjective2: adjective2,
//         adjecive3: adjective3,
//         noun1: noun1,
//         noun2: noun2,
//         noun3: noun3,
//         noun4: noun4,
//         name: name,
//         verb1: verb1,
//         verb2: verb2,
//         verb3: verb3,
//       };

//       // convert JS object into JSON file
//       storyJSON = JSON.stringify(storyData);

//       saveStory(storyJSON);
//     });
// }

// //STEP 2: Now that the data is saved as a JSON, upload it to our database
// function saveStorytoDB(story) {
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
//   import { firebase } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js";
//   import { firestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore-compat.js";
//   // import "firebase/firestore";

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyBKPb7V2xsGrZvd2hXp2Enuj1haTEIoLi4",
//     authDomain: "madlibs-bb9af.firebaseapp.com",
//     projectId: "madlibs-bb9af",
//     storageBucket: "madlibs-bb9af.appspot.com",
//     messagingSenderId: "622424206247",
//     appId: "1:622424206247:web:2939814263e699eeb86482",
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   // Initialize Cloud Firestore Database and get a reference to the service
//   const db = firebase.firestore();

//   // add storyJSON to database
//   db.collection("stories").add({
//     data: storyJSON,
//   });
// }
