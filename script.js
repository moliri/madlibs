// setup firebase app and firestore database
const firebaseConfig = {
  apiKey: "AIzaSyBKPb7V2xsGrZvd2hXp2Enuj1haTEIoLi4",
  authDomain: "madlibs-bb9af.firebaseapp.com",
  projectId: "madlibs-bb9af",
  storageBucket: "madlibs-bb9af.appspot.com",
  messagingSenderId: "622424206247",
  appId: "1:622424206247:web:2939814263e699eeb86482",
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("firebase setup complete!");

function createMadLib() {
  // this method will create and display madlib based on user input from form

  //first, save all user inputs as local variables
  console.log("createMadLib() called");
  var adjective1 = document.getElementById("adjective1").value;
  var adjective2 = document.getElementById("adjective2").value;
  var adjective3 = document.getElementById("adjective3").value;

  var noun1 = document.getElementById("noun1").value;
  var noun2 = document.getElementById("noun2").value;
  var noun3 = document.getElementById("noun3").value;
  var noun4 = document.getElementById("noun4").value;

  var name = document.getElementById("name").value;

  var verb1 = document.getElementById("verb1").value;
  var verb2 = document.getElementById("verb2").value;
  var verb3 = document.getElementById("verb3").value;

  var storyName = document.getElementById("storyName").value;

  // next, set the text inside our "story" element in the HTML based on the variables above
  document.getElementById("story").innerHTML =
    "It was a <u>" +
    adjective1 +
    "</u> Spring day. I woke up to the <u>" +
    adjective2 +
    "</u> smell of <u>" +
    noun1 +
    "</u> roasting in the oven downstairs. I <u>" +
    verb1 +
    "</u> down the stairs to see if I can help <u>" +
    verb2 +
    "</u> breakfast.  My mom said 'See if the neighbor, <u>" +
    name +
    "</u>,  has any fresh <u>" +
    noun2 +
    "</u>.' When I got there, I couldn't believe my <u>" +
    noun3 +
    "</u>! There was a <u>" +
    adjective3 +
    "</u> duck <u>" +
    verb3 +
    "</u> on the <u>" +
    noun4 +
    "</u>! - " +
    storyName;

  // next, save the entire story element as a string
  var story = document.getElementById("story").innerHTML;
  console.log("story: " + story);

  // next, create JS object that stores each variable needed for the story
  var storyData = {
    timestamp: Date.now(),
    story: story,
    adjective1: adjective1,
    adjective2: adjective2,
    adjecive3: adjective3,
    noun1: noun1,
    noun2: noun2,
    noun3: noun3,
    noun4: noun4,
    name: name,
    verb1: verb1,
    verb2: verb2,
    verb3: verb3,
    storyName: storyName,
  };

  // next, save data in JSON format (easy to share + print to console)
  var storyJSON = JSON.stringify(storyData);
  console.log("storyJSON: " + storyJSON);

  // finally, return the storyData object
  return storyData;
}

function saveMadLib() {
  // this method saves the madlib to database
  console.log("saveMadLib() called");

  // first, get the storyData object from createMadLib()
  var storyData = createMadLib();

  //then, save the storyName and storyData object to the database
  db.collection("madlibs").doc(storyData.storyName).set(storyData);
  alert(storyData.storyName + " saved to database!");
}

function retrieveMadLib() {
  // this method will retrieve an existing madlib from database
  console.log("retrieveMadLib() called");

  // first, ask the user to type the story they want to retrieve
  var storyName = prompt("Enter the name of the story you want to look up:");
  db.collection("madlibs")
    .doc(storyName)
    .get()
    .then((doc) => {
      // if the story exists in the database, show it on the website. else, say "Story not found!"
      if (doc.exists) {
        console.log("Document data:", doc.data());
        var storyData = doc.data();
        document.getElementById("story").innerHTML = storyData.story;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        document.getElementById("story").innerHTML = "Story not found!";
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      document.getElementById("story").innerHTML = "Story not found!";
    });
}

function editMadLib() {
  // this method will allow the user to edit an existing madlib in database
  console.log("editMadLib() called");

  // first, ask the user to retrieve an existing madlib from database
  var storyName = prompt("Enter the name of the story you want to look up:");
  db.collection("madlibs")
    .doc(storyName)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        var storyData = doc.data();

        //if story is found, display all the previous inputs for the story. else, display "Story not found!"
        document.getElementById("adjective1").value = storyData.adjective1;
        document.getElementById("adjective2").value = storyData.adjective2;
        document.getElementById("adjective3").value = storyData.adjecive3;

        document.getElementById("noun1").value = storyData.noun1;
        document.getElementById("noun2").value = storyData.noun2;
        document.getElementById("noun3").value = storyData.noun3;
        document.getElementById("noun4").value = storyData.noun4;

        document.getElementById("name").value = storyData.name;

        document.getElementById("verb1").value = storyData.verb1;
        document.getElementById("verb2").value = storyData.verb2;
        document.getElementById("verb3").value = storyData.verb3;
        document.getElementById("storyName").value = storyData.storyName;

        document.getElementById("story").innerHTML = storyData.story;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        document.getElementById("story").innerHTML = "Story not found!";
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      document.getElementById("story").innerHTML = "Story not found!";
    });
}

function deleteMadLib() {
  // this method will retrieve an existing madlib from database and delete it
  console.log("deleteMadLib() called");

  // first, ask the user to type the story they want to retrieve
  var storyName = prompt("Enter the name of the story you want to delete:");
  db.collection("madlibs")
    .doc(storyName)
    .get()
    .then((doc) => {
      // if the story exists in the database, delete it from the database. else, say "Story not found!"
      if (doc.exists) {
        console.log("Document data:", doc.data());
        var storyData = doc.data();
        document.getElementById("story").innerHTML =
          storyData.storyName + " successfully deleted!";
        db.collection("madlibs").doc(storyName).delete();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        document.getElementById("story").innerHTML = "Story not found!";
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      document.getElementById("story").innerHTML = "Story not found!";
    });
}
