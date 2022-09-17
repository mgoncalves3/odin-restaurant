import imgSrc from "./classic-tuna-melt.jpg";

let content = document.querySelector("#content");

export function pageDefault() {
  function navigation() {
    let navItems = ["Home", "Our Sandwiches", "Contacts"];

    let nav = document.createElement("nav");
    nav.classList.add("navigation");

    let list = document.createElement("ul");
    list.classList.add("top-nav");

    navItems.forEach((item) => {
      let x = document.createElement("li");
      let anchor = document.createElement("a");
      anchor.classList.add("button");
      anchor.href = "#";
      anchor.innerText = item;

      if (anchor.innerText === "Home") {
        anchor.classList.add("active");
      }
      x.appendChild(anchor);
      list.appendChild(x);
    });
    nav.appendChild(list);
    content.appendChild(nav);
    return nav;
  }
  function footer() {
    let foot = document.createElement("footer");
    foot.innerHTML = `2022 - &copy; Marco Gonçalves`;
    content.appendChild(foot);
    return foot;
  }

  content.appendChild(navigation());
  content.appendChild(footer());
}


export function main() {
  let main = document.createElement("main");
  let mainDiv = document.getElementById('main');
  main.id = 'main';

    function title() {
      let div = document.createElement("div");
      div.classList.add("title");

      let title = document.createElement("h1");
      title.innerText = `Marco's Tuna Truck`;
      div.appendChild(title);

      return div;
    }

    function image() {
      let div = document.createElement("div");
      div.classList.add("image");

      let img = new Image();
      img.src = imgSrc;
      div.appendChild(img);

      return div;
    }

    function headline() {
      let div = document.createElement("div");
      div.classList.add("headline");

      let phrase = document.createElement("p");
      phrase.innerText = `Come have the best sandwich ever. We knead our bread, emulsify our mayo 
      and have the most amazing tuna. Don't pass on the opportunity to
      experience a sandwich so perfect it makes a grown man cry.`;
      div.appendChild(phrase);

      return div;
    }

    if (!mainDiv) {
      main.appendChild(title());
      main.appendChild(image());
      main.appendChild(headline());
  
      return main;
    }

    mainDiv.appendChild(title());
    mainDiv.appendChild(image());
    mainDiv.appendChild(headline());
   return mainDiv; 
  }