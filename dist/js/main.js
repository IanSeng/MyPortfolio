//Select DOM (document object model) Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuIndex = document.querySelector(".menu-index");
const menuAbout = document.querySelector(".menu-about");
const menuWork = document.querySelector(".menu-work");
//Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuIndex.classList.add("show");
    menuAbout.classList.add("show");
    menuWork.classList.add("show");

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuIndex.classList.remove("show");
    menuAbout.classList.remove("show");
    menuWork.classList.remove("show");

    // Set Menu State
    showMenu = false;
  }
}
