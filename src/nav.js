export function load () {
  let items = ['Home', 'Our Sandwiches', 'Where are we', 'Contacts'];
  
  let nav = document.createElement('nav');
  nav.classList.add('navigation');
  
  let list = document.createElement('ul');
  list.classList.add('top-nav');
  
  items.forEach(item => {
    let x = document.createElement('li');
    x.innerText = item;
    if (x.innerText === 'Home') {x.classList.add('active') };
    list.appendChild(x);
  })
  nav.appendChild(list);
  return nav;
};