var firebaseConfig = {
  apiKey: "AIzaSyBZDXATHRaqNviSbF-ej_QM2v8TywRJ3DY",
  authDomain: "kwitter-5e631.firebaseapp.com",
  databaseURL: "https://kwitter-5e631-default-rtdb.firebaseio.com",
  projectId: "kwitter-5e631",
  storageBucket: "kwitter-5e631.appspot.com",
  messagingSenderId: "1033997868943",
  appId: "1:1033997868943:web:65321c6a2b51fcb968b5fa"
};
//My Extra Work
name1=localStorage.getItem("user_name");
document.getElementById("name").innerHTML="Welcome " +  name1;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//This will Add Room
function addRoom(){
  roomName=document.getElementById("roomName").value;
  firebase.database().ref("/").child(roomName).update({purpose:"chatting"});
  localStorage.setItem("roomName", roomName);
  window.location="kwitter_page.html";
}
//It will show  output
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
console.log(Room_names)
row="<div class='room_name id="+Room_names+"onclick='goToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
    });
  });
}
getData();

function goToRoomName(name){
  console.log(name);
  localStorage.setItem("roomName",name);
  window.location="kwitter_page.html";
}