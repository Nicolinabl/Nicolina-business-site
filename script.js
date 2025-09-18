const hamburgerLinks = document.querySelector(".hamburgerLinks")

function hamburgerFunction(close) {
  close.classList.toggle("change")
  hamburgerLinks.classList.toggle("open")
}

const btn = document.getElementById("partyMode")
const modelSection = document.getElementById("modelSection")
const desktopNav = document.getElementById("desktopNav")
const heroText = document.getElementById("heroText")

btn.onclick = () => {
  modelSection.classList.toggle("party")
  desktopNav.classList.toggle("partyNav")
  heroText.classList.toggle("partyText")
}

















/* OLD JAVASCRIPT
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

hamburger.addEventListener("click", toggleMenu)*/

