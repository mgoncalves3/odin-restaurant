import * as url from './classic-tuna-melt.jpg';

export function load () {
  let main = document.createElement('main');
  main.classList.add('title');
  
  function createTitle () {
    let div = document.createElement('div');
    let title = document.createElement('h1');
    title.innerText = `Marco's Tuna Truck`;
    div.appendChild(title);
    return div;
  };

  function createImage () {
    let div = document.createElement('div');
    div.classList.add('image');

    let img = document.createImage();
    img.src = url;

    div.appendChild(img);
    console.log(div);
    return div;
  }

  main.appendChild(createTitle());
  main.appendChild(createImage());

  return main;
}

// TODO
// fix image not loading