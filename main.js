import "normalize.css";
import "./style.css";
import { headerComponent } from "./src/header-component/header-component";
import { mainComponent } from "./src/main-component/main-component";
import { footerComponent } from "./src/footer-component/footer-component";

const body = document.querySelector(".body");

headerComponent(body);
mainComponent(body);
footerComponent(body);
