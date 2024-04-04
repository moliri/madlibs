function createMadLib() {
  // Get the user input from the form
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

  // Create the story using the user input, and set the text inside our story element in the HTML to reflect the story
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
    "</u>!";

  // Save the completed story element as a string
  var story = document.getElementById("story").innerHTML;
  console.log("story: " + story);

  // create JS object to store data first
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
  };
  console.log("storyData: " + storyData);

  // save data in JSON format (easy to share + print to console)
  var storyJSON = JSON.stringify(storyData);
  console.log("storyJSON: " + storyJSON);
  return storyJSON;

  //now, add data to database
  // db.collection("stories/newStory").add(storyData);

  
}
