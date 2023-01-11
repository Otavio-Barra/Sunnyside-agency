const nav = document.querySelector(".nav");
const menuMobile = document.querySelector("#menu-mobile");

nav.addEventListener("click", () => {
  nav.classList.toggle("active-menu");
  menuMobile.classList.toggle("active");
});
