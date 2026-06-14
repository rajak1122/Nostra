//Popup Close Functionality//

var xmark = document.getElementById("close");
var popup = document.getElementById("popup");

//Menubar Functionality//

var menubar = document.getElementById("menubar")
var closebtn = document.getElementById("closebtn")
var sidepopup = document.getElementById("sidepopup")

menubar.addEventListener("click", () => {
  sidepopup.style.left = "0%"
})

closebtn.addEventListener("click", () => {
  sidepopup.style.left = "-50%"
})