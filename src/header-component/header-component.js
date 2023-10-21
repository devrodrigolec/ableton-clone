import headerComponentHTML from "./header-component.html?raw";
import "./header-component.css";

export const headerComponent = (body) => {
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = headerComponentHTML;

  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const navMain = document.querySelector(".nav-main");
    const logoSVG = document.querySelector(".logo-svg");
    const logoMenu = document.querySelector(".logo-menu");
    const moreAbleton = document.querySelector(".more-ableton");
    const moreButton = document.querySelector(".more-button");
    const moreOrLessButton = document.querySelector(".more-less");
    let isMenuActive = false;
    let isMoreAbletonActive = false;
    moreOrLessButton.textContent = "+";
    menuButton.addEventListener("click", () => {
      if (!isMenuActive) {
        navMain.classList.add("nav-show");
        logoSVG.classList.add("logo-active");
        logoMenu.classList.add("logo-menu-active");
        isMenuActive = true;
      } else {
        navMain.classList.remove("nav-show");
        logoSVG.classList.remove("logo-active");
        logoMenu.classList.remove("logo-menu-active");
        isMenuActive = false;
      }
    });
    moreButton.addEventListener("click", () => {
      if (!isMoreAbletonActive) {
        moreAbleton.classList.remove("more-ableton-hide");
        moreOrLessButton.textContent = "-";
        isMoreAbletonActive = true;
      } else {
        moreAbleton.classList.add("more-ableton-hide");
        moreOrLessButton.textContent = "+";
        isMoreAbletonActive = false;
      }
    });
  });

  body.appendChild(header);
  return header;
};
