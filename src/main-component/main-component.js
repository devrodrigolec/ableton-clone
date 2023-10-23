import mainComponentHTML from "./main-component.html?raw";
import "./main-component.css";

export const mainComponent = (body) => {
  const main = document.createElement("main");
  main.classList.add("main");
  main.innerHTML = mainComponentHTML;

  body.appendChild(main);
};
