import "./reset.css";
import "./style.css";
import * as home from "./home.js";
import * as menu from "./menu.js";
import * as contacts from "./contacts.js";

home.pageDefault();

const content = document.querySelector("#content");
const links = document.getElementsByClassName("button");

// Default
content.insertBefore(home.main(), content.lastElementChild);

function resetMain() {
  let mainDiv = document.getElementById("main");
  while (mainDiv.childElementCount > 0) {
    mainDiv.removeChild(mainDiv.lastChild)
  }
}

for (let button of links) {
  button.addEventListener("click", (e) => {
    
    if (e.target.classList.contains('active')) {
      return;
    };
    
    (function toggleActiveTab() {
      // Check which tab is active and toggle the class
      for (let activeBtn of links) {
        if (activeBtn.classList.contains("active")) {
          activeBtn.classList.toggle("active");
        }
      }
      // Add the class to the menu item that was clicked
      button.classList.toggle("active");
    })();

    (function changeTab() {
      let mainDiv = document.getElementById('main');
      switch (e.target.textContent) {
        case "Home":
          resetMain();
          content.insertBefore(home.main(), content.lastElementChild);
          break;
        case "Our Sandwiches":
          resetMain();
          menu.load();
          break;
        case "Contacts":
          resetMain();
          contacts.load();
          break;
      }
    })();
  });
}