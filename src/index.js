import Books from './modules/Books.js';
import formatTs from './modules/DateTime.js';
import { load, showOnPage } from './modules/HashRouter.js';
// get books data from localStorage if it is null give empty array to class
const books = new Books((JSON.parse(localStorage.getItem('books')) === null) ? [] : JSON.parse(localStorage.getItem('books')));

// select data-time
const dt = document.querySelector('.date-time');

// display every second
setInterval(() => {
  dt.innerHTML = formatTs();
}, 1000);

// if the current is null redirect to add
if (!window.location.hash) {
  window.location.hash = '#add';
}
// load for the intital page
load(books);

// eventlistener on hash change
window.addEventListener('hashchange', () => {
  load(books);
});

// intial color for links
showOnPage();
