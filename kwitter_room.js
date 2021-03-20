
const Config = {
      apiKey: "AIzaSyBiGr4ZDAZnvczG_myOhcEcgKvP_V4mqlA",
      authDomain: "kwitter-b9d04.firebaseapp.com",
      databaseURL: "https://kwitter-b9d04-default-rtdb.firebaseio.com",
      projectId: "kwitter-b9d04",
      storageBucket: "kwitter-b9d04.appspot.com",
      messagingSenderId: "947728479287",
      appId: "1:947728479287:web:4b38a1afb71f00053cfbb2",
      measurementId: "G-755D0X9VSM"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
