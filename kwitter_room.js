var firebaseConfig = {
    apiKey: "AIzaSyC69iLXSQ6AvJTfHj1uuAwJsZqG_UpTw7Y",
    authDomain: "letschat-f88d2.firebaseapp.com",
    projectId: "letschat-f88d2",
    storageBucket: "letschat-f88d2.appspot.com",
    messagingSenderId: "768819015128",
    appId: "1:768819015128:web:9af5af3dcc67b6642516ad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
       
    }) ; 
    localStorage.setItem("room_name" , room_name);
    window.location = "kwitter_page.html";

} 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}