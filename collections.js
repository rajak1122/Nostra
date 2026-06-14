//Popup Close Functionality//

var xmark = document.getElementById("close");
var popup = document.getElementById("popup");

//Menubar Functionality//

var menubar = document.getElementById("menubar");
var closebtn = document.getElementById("closebtn");
var sidepopup = document.getElementById("sidepopup");

menubar.addEventListener("click", () => {
    sidepopup.style.left = "0%";
});

closebtn.addEventListener("click", () => {
    sidepopup.style.left = "-50%";
});

//Fiter Functionality//

const checkboxes = document.querySelectorAll("input[type='checkbox']")
const products = document.querySelectorAll(".product")

checkboxes.forEach((box) => {
    box.addEventListener("change", filterProducts)
})

function filterProducts() {

    const selectedCategories = []
    const selectedColors = []
    const selectedGenders = []

    document.querySelectorAll(".category:checked").forEach((item) => {
        selectedCategories.push(item.value)
    })

    document.querySelectorAll(".color:checked").forEach((item) => {
        selectedColors.push(item.value)
    })

    document.querySelectorAll(".gender:checked").forEach((item) => {
        selectedGenders.push(item.value)
    })

    products.forEach((product) => {

        const category = product.dataset.category
        const color = product.dataset.color
        const gender = product.dataset.gender

        const categoryMatch =
            selectedCategories.length === 0 ||
            selectedCategories.includes(category)

        const colorMatch =
            selectedColors.length === 0 ||
            selectedColors.includes(color)

        const genderMatch =
            selectedGenders.length === 0 ||
            selectedGenders.includes(gender)

        if (categoryMatch && colorMatch && genderMatch) {
            product.style.display = "block"
        }
        else {
            product.style.display = "none"
        }

    })

}

//Search Functionality//

var searchInput = document.getElementById("searchbar")

searchInput.addEventListener("keyup", function () {

    const enteredValue = this.value.toLowerCase()

    products.forEach((product) => {

        const productName =
            product.innerText.toLowerCase()

        if (productName.indexOf(enteredValue) < 0) {
            product.style.display = "none"
        }
        else {
            product.style.display = "block"
        }

    })

})