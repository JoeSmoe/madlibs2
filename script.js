// Your web app's Firebase configuration.
  const firebaseConfig = {
    apiKey: "AIzaSyDVlwQvpdETQ739pqmfL4x8ZXpdVVyKiLs",
    authDomain: "madlibs-e9725.firebaseapp.com",
    projectId: "madlibs-e9725",
    storageBucket: "madlibs-e9725.appspot.com",
    messagingSenderId: "234899162361",
    appId: "1:234899162361:web:0363c0696b79db4bce8e28"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  console.log("firebase setup complete!");

function createMadLib() {
  var title=document.getElementById('title').value;
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
    storyName: title,
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
  //var storyJSON = JSON.stringify(storyData);
  //console.log("storyJSON: " + storyJSON);
  //return storyJSON;
  
  return storyData;
}

function saveMadLib() {
  // save to DB
  var storyData = createMadLib();
  db.collection("madlibs").doc(storyData.storyName).set(storyData);
  alert(storyData.storyName + " saved to database!");
}

function findMadLib() {
  // get madlib title
  var storyName = prompt("Enter a story name to find:");
  db.collection("madlibs").doc(storyName).get().then((doc) => {
    if (doc.exists) {
      var storyData = doc.data();
      document.getElementById('output').innerHTML = storyData.story;
    } else {
      document.getElementById('output').innerHTML = "No such story found!";
    }
  })
  .catch((err) => {
    console.log('Story not found', err);
    document.getElementById('output').innerHTML = "Story not found.";
  });
}

function editMadLib() {
  // get madlib title
  var storyName = prompt("Enter a story name to edit:");
  db.collection("madlibs").doc(storyName).get().then((doc) => {
    if (doc.exists) {
      var storyData = doc.data();
      document.getElementById('title').value = storyData.storyName;
      document.getElementById('adj1').value = storyData.adj1;
      document.getElementById('noun1').value = storyData.noun1;
      document.getElementById('adj2').value = storyData.adj2;
      document.getElementById('noun2').value = storyData.noun2;
      document.getElementById('adj3').value = storyData.adj3;
      document.getElementById('noun3').value = storyData.noun3;
      document.getElementById('noun4').value = storyData.noun4;
      document.getElementById('story').value = storyData.story;
      document.getElementById('noun4').value = storyData.noun4;
    } else {
      document.getElementById('output').innerHTML = "No such story found!";
    }
  })
  .catch((err) => {
    console.log('Story not found', err);
    document.getElementById('output').innerHTML = "Story not found.";
  });
}

function deleteMadLib() {
  // get madlib title
  var storyName = prompt("Enter a story name to delete:");
  db.collection("madlibs").doc(storyName).get().then((doc) => {
    if (doc.exists) {
      var storyData = doc.data();
      db.collection("madlibs").doc(storyName).delete();
      document.getElementById('output').innerHTML = storyData.storyName + "  successfully deleted.";
    } else {
      document.getElementById('output').innerHTML = "No such story found!";
    }
  })
  .catch((err) => {
    console.log('Story not found', err);
    document.getElementById('output').innerHTML = "Story not found.";
  });
}