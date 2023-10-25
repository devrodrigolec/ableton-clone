import footerComponentHTML from "./footer-component.html?raw";
import "./footer-component.css";

export const footerComponent = (body) => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.innerHTML = footerComponentHTML;

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".newsletter-form");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  });

  body.appendChild(footer);
};
