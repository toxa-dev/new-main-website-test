const hamburgerIcon = document.querySelector(
  ".main-header__hamburger-group__container"
);
const mainHeader = document.querySelector(".main-header");

// Handle hamburger menu
hamburgerIcon.addEventListener("click", () => openMenu());
function openMenu() {
  hamburgerIcon.classList.toggle("active");
  mainHeader.classList.toggle("expand-full-view-port");
  mainHeader.classList.toggle("scroll-y");
  document.body.classList.toggle("no-scroll");
}
