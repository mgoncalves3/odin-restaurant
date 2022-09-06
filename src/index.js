import './reset.css';
import './style.css';

function resetMain() {
  let mainDiv = document.querySelector('main');
  (function deleteElements() {
    while (mainDiv.hasChildNodes()) {
      mainDiv.removeChild(mainDiv.lastChild)
    };
  })();
};

resetMain();