var firebaseConfig = {
    apiKey: "AIzaSyBaclGrPIJV7VHAUZqq_sE5-nHhjWbp9SQ",
    authDomain: "kwitter-project-93-353de.firebaseapp.com",
    databaseURL: "https://kwitter-project-93-353de-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-93-353de",
    storageBucket: "kwitter-project-93-353de.appspot.com",
    messagingSenderId: "116476075301",
    appId: "1:116476075301:web:7dd22236a2dfb6ee9acecc"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='rediectToRoomName(this.id)' style='font-size: 15px; cursor: pointer; width: 95%; text-align: center; margin: 3px;'><i class='bi-people-fill'></i>"+Room_names+"</div><hr style='color: black; height: 1.5px;'>"
document.getElementById("output").innerHTML +=row;
//End code
});});}
getData();
function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update(
    {
      purpose: "adding room name"
    }
  );
  localStorage.setItem("room_name", room_name);
  console.log(room_name);
  window.location = "kwitter_page.html";
}
function rediectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

