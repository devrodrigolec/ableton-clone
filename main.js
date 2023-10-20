import "normalize.css";
import "./style.css";
import { headerComponent } from "./src/header-component/header-component";

const body = document.querySelector(".body");

headerComponent(body);
