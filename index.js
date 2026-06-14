//Wishlist Functionality//

var xmark = document.getElementById("close");
var popup = document.getElementById("popup");

xmark.addEventListener("click", function () {
  popup.style.display = "none";
});

var wishlist = document.querySelectorAll(".wishlist");

wishlist.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.classList.contains("fa-regular")) {
      item.classList.remove("fa-regular");
      item.classList.add("fa-solid");
      item.style.color = "red";
    } else {
      item.classList.remove("fa-solid");
      item.classList.add("fa-regular");
      item.style.color = "white";
    }
  });
});

//Slider Animation//

var slider = document.getElementById("slider");
var nextbtn = document.getElementById("nextarrow");
var prevbtn = document.getElementById("prevarrow");

let currentIndex = 0;
const totalSlides = 4;

nextbtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevbtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});

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