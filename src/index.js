import Books from './modules/Classes.js';
import Add from './view/add.js';
import Contact from './view/contact.js';
import Show from './view/show.js';
// get books data from localStorage if it is null give empty array to class
const books = new Books((JSON.parse(localStorage.getItem('books')) === null) ? [] : JSON.parse(localStorage.getItem('books')));

const load = async () => {
  const fragmentId = window.location.hash.substr(1);
  const routes = [
    { path: '/', View: Add },
    { path: 'list', View: Show },
    { path: 'about', View: Contact },
    { path: 'add', View: Add },
  ];

  const route = routes.filter((route) => route.path === fragmentId);
  const view = new route[0].View();
  document.querySelector('#app').innerHTML = await view.getDoc();
  if (route[0].path === 'list') {
    books.createBookFromLocal();
  }

  if (route[0].path === 'add') {
    // add button
    const button = document.getElementById('add');
    // if click add btn, data to local and reload the page
    button.addEventListener('click', (e) => {
      books.addBook(e);
    });
  }
};
if (!window.location.hash) {
  window.location.hash = '#home';
}
load();
window.addEventListener('hashchange', () => {
  load();
});

load();