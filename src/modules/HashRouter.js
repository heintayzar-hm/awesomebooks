import Add from './view/add.js';
import Show from './view/show.js';
import Contact from './view/contact.js';

// avaliable routes
const routes = [
  { path: '/', View: Add },
  { path: 'list', View: Show },
  { path: 'about', View: Contact },
  { path: 'add', View: Add },
];

// color the current link
const showOnPage = () => {
  routes.forEach((route) => {
    if (route.path !== '/') {
      const current = document.getElementById(route.path);
      if ((`#${route.path}`) === window.location.hash) {
        current.classList.add('current');
      } else {
        current.classList.remove('current');
      }
    }
  });
};

// main function to change and update navigation
const load = async (books) => {
  // remove #
  const fragmentId = window.location.hash.substr(1);

  // get the one whose location is on current hash
  const route = routes.filter((route) => route.path === fragmentId);

  // give the html class
  const view = new route[0].View();

  // append the data from the main getDoc
  document.querySelector('#app').innerHTML = await view.getDoc();

  // change the link color on vchange
  showOnPage();

  // javascript code
  await view.getJs(books);
};

export { routes, showOnPage, load };