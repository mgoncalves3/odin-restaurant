import imgSrc from "./classic-tuna-melt.jpg";

export function load() {
  let main = document.createElement("main");

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

  main.appendChild(title());
  main.appendChild(image());
  main.appendChild(headline());

  return main;
}
