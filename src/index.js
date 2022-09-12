import "./reset.css";
import "./style.css";
import * as home from "./home.js";

const content = document.querySelector("#content");
const links = document.getElementsByClassName("button");

home.load();


function resetMain() {
  let mainDiv = document.querySelector("main");
  (function deleteElements() {
    while (mainDiv.hasChildNodes()) {
      mainDiv.removeChild(mainDiv.lastChild);
    }
  })();
}



for (let button of links) {
  button.addEventListener("click", () => {
    for (let activeBtn of links) {
      if (activeBtn.classList.contains("active")) {
        activeBtn.classList.toggle("active");
      }
    }

    button.classList.toggle("active");
  });
}
