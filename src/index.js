import Books from './modules/Classes.js';

// get books data from localStorage if it is null give empty array to class
const books = new Books((JSON.parse(localStorage.getItem('books')) === null) ? [] : JSON.parse(localStorage.getItem('books')));
// books.set();
// get list of books and append to dom
books.createBookFromLocal();

// add button
const button = document.getElementById('add');

// if click add btn, data to local and reload the page
button.addEventListener('click', (e) => {
  books.addBook(e);
});

// select the nav items
let list = document.getElementById('list');
let addnew = document.getElementById('addnew');
let contact = document.getElementById('contact');
let addbook = document.querySelector('.area');
let showbook = document.querySelector('.show-book-list');
let contactme = document.querySelector('.contact-me');

list.addEventListener('click', () => {
  showbook.style.display = 'flex';
  addbook.style.display = 'none';
  contactme.style.display = 'none';
})

addnew.addEventListener('click', () => {
  addbook.style.display = 'flex';
  showbook.style.display = 'none';
  contactme.style.display = 'none';
})

contact.addEventListener('click', () => {
  addbook.style.display = 'none';
  showbook.style.display = 'none';
  contactme.style.display = 'flex';
})