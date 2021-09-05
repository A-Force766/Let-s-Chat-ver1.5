var firebaseConfig = {
apiKey: "AIzaSyAdYxls3BEihTcDlzGpSPqVo6dQcOTLNQk",
authDomain: "let-s-chat-8e831.firebaseapp.com",
databaseURL: "https://let-s-chat-8e831-default-rtdb.firebaseio.com",
projectId: "let-s-chat-8e831",
storageBucket: "let-s-chat-8e831.appspot.com",
messagingSenderId: "739917673750",
appId: "1:739917673750:web:0d2597247048ef317ccc37"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() 
{ 
firebase.database().ref("/").on('value',
function(snapshot) 
{ 
document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{ 
childKey = childSnapshot.key; 
Room_names = childKey; 
console.log("Room Name - " + Room_names); 
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;
}); 
});
} 
getData();