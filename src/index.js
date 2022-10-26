import Books from './modules/Classes.js';
import Add from './view/add.js';
import Contact from './view/contact.js';
import Show from './view/show.js';
// get books data from localStorage if it is null give empty array to class
const books = new Books((JSON.parse(localStorage.getItem('books')) === null) ? [] : JSON.parse(localStorage.getItem('books')));

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
const load = async () => {
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

  // javascript code for list section
  if (route[0].path === 'list') {
    books.createBookFromLocal();
  }

  // javascript code for add section
  if (route[0].path === 'add' || route[0].path === '/') {
    // add button
    const button = document.getElementById('add-books');
    // if click add btn, data to local
    button.addEventListener('click', (e) => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      books.addBook({ e, title, author });
    });
  }
};

// if the current is null redirect to add
if (!window.location.hash) {
  window.location.hash = '#add';
}

// load for the intital page
load();

// eventlistener on hash change
window.addEventListener('hashchange', () => {
  load();
});

// intial color for links
showOnPage();