const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar-link");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
