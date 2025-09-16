const menu = document.getElementById("menu")
const menuItems = document.getElementsByClassName("menuItem")
const hamburger = document.getElementById("hamburger")
const closeIcon = document.getElementById("closeIcon")
const menuIcon = document.getElementById("menuIcon")

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu")
    closeIcon.style.display = "none"
    menuIcon.style.display = "block"
  } else {
    menu.classList.add("showMenu")
    closeIcon.style.display = "block"
    menuIcon.style.display = "none"
  }
}

hamburger.addEventListener("click", toggleMenu)

/*const submitButton = document.getElementById("submit-button")

const bookingRequest = () => {
  alert("Great choice.We will get back to you shortly with more details".)
}

submitButton.addEventListener("click", bookingRequest)*/

