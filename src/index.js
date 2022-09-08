import './reset.css';
import './style.css';
import * as nav from './nav.js';
import * as main from './main_content.js';
import * as footer from './footer.js';

const content = document.querySelector('#content');

function resetMain() {
  let mainDiv = document.querySelector('main');
  (function deleteElements() {
    while (mainDiv.hasChildNodes()) {
      mainDiv.removeChild(mainDiv.lastChild)
    };
  })();
};

content.appendChild(nav.load());
content.appendChild(main.load());
content.appendChild(footer.load())