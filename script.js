//DOM Elements
const menuBottom = document.querySelector(".menu-section");
const exitMenuBottom = document.querySelector("#circle");
const menuContainer = document.querySelector(".right-container");

menuBottom.addEventListener( "click",() => {
    menuContainer.classList.add("active");
});

exitMenuBottom.addEventListener("click", () => {
    menuContainer.classList.remove("active");
});