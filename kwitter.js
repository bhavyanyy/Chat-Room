function addUser(){
    addName=document.getElementById("user_name").value;
    localStorage.setItem("user_name", addName);
    window.location="kwitter_room.html"
}