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
