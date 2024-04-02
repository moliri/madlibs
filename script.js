function createMadLib() {
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
    "</u>duck <u>" +
    verb3 +
    "</u> on the <u>" +
    noun4 +
    "</u>!";
}
