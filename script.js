//const { formatPostcssSourceMap } = require("vite");

function printMadLib() {
  var adj1=document.getElementById('adj1').value;
  var noun1=document.getElementById('noun1').value;
  var adj2=document.getElementById('adj2').value;
  var noun2=document.getElementById('noun2').value;
  var adj3=document.getElementById('adj3').value;
  var noun3=document.getElementById('noun3').value;
  var noun4=document.getElementById('noun4').value;

  var story = document.getElementById('output').innerHTML = "Sonic's abode is a very <u>"+adj1+"</u> place. At first glance, it seems like a/an <u>"+adj2+"</u> cave, but if you look closer, you'll see it's actually a comfortable <u>"+noun1+"</u>. For one, Sonic has a super-cozy beanbag <u>"+noun2+"</u>. When he feels like listening to some <u>"+adj3+"</u> tunes from the 1980s, Sonic turns on his old-school <u>"+noun3+"</u>, pulls out his collection of <u>"+noun4+"</u>, and jams out.";

  // create JS object
  var storyData = {
    timestamp: Date.now(),
    story: story,
    adj1: adj1,
    noun1: noun1,
    adj2: adj2,
    noun2: noun2,
    adj3: adj3,
    noun3: noun3,
    noun4: noun4
  };

  // save JSON format
  var storyJSON = JSON.stringify(storyData);
  console.log("storyJSON: " + storyJSON);
  return storyJSON;
}