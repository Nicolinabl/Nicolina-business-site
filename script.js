const hamburgerLinks = document.querySelector(".hamburgerLinks")
const hamburgerBtn = document.querySelector(".hamburger")

function hamburgerFunction(x) {
  x.classList.toggle("change")
  hamburgerLinks.classList.toggle("open")
}

const btn = document.getElementById("partyMode")
const modelSection = document.getElementById("modelSection")
const desktopNav = document.getElementById("desktopNav")
const heroText = document.getElementById("heroText")
const btnHamburger = document.getElementById("partyModeHamburger")
const fullBody = document.getElementById("fullBody")

btn.onclick = () => {
  modelSection.classList.toggle("party")
  desktopNav.classList.toggle("partyNav")
  heroText.classList.toggle("partyText")
  fullBody.classList.toggle("partyBody")

  /*if (btn.innerText === "Party mode") {
    btn.innerText = "Normal mode"
  } else {
    btn.innerText = "Party mode"
  } */
}

btnHamburger.onclick = () => {
  modelSection.classList.toggle("party")
  desktopNav.classList.toggle("partyNav")
  heroText.classList.toggle("partyText")
  fullBody.classList.toggle("partyBody")
  closeHamburger()

  /*if (btnHamburger.innerText === "Party mode") {
    btnHamburger.innerText = "Normal mode"
  } else {
    btnHamburger.innerText = "Party mode"
  }*/
}

function closeHamburger() {
  hamburgerLinks.classList.remove("open")
  hamburgerBtn.classList.remove("change")
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

