const humburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

humburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});