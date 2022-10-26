import Books from './modules/Classes.js';
import Add from './view/add.js';
import Contact from './view/contact.js';
import Show from './view/show.js';
// get books data from localStorage if it is null give empty array to class
const books = new Books((JSON.parse(localStorage.getItem('books')) === null) ? [] : JSON.parse(localStorage.getItem('books')));
const routes = [
  { path: '/', View: Add },
  { path: 'list', View: Show },
  { path: 'about', View: Contact },
  { path: 'add', View: Add },
];
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
const load = async () => {
  const fragmentId = window.location.hash.substr(1);

  const route = routes.filter((route) => route.path === fragmentId);
  const view = new route[0].View();
  document.querySelector('#app').innerHTML = await view.getDoc();

  showOnPage();
  if (route[0].path === 'list') {
    books.createBookFromLocal();
  }

  if (route[0].path === 'add' || route[0].path === '/') {
    // add button
    const button = document.getElementById('add-books');
    // if click add btn, data to local and reload the page
    button.addEventListener('click', (e) => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      books.addBook({ e, title, author });
    });
  }
};
if (!window.location.hash) {
  window.location.hash = '#add';
}
load();
window.addEventListener('hashchange', () => {
  load();
});

showOnPage();