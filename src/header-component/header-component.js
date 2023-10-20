import headerComponentHTML from "./header-component.html?raw";
import "./header-component.css";

export const headerComponent = (body) => {
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = headerComponentHTML;

  body.appendChild(header);
  return header;
};
