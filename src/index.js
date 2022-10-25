// get books data from localStorage if it is null give empty array
const books = (JSON.parse(localStorage.getItem('books')) === null) ? [] : JSON.parse(localStorage.getItem('books'));

/**
 * section to show and remove books
 */

// get ul for books
const booksShow = document.querySelector('.books-show');

// function to create books and append to doc
const createBookFromLocal = ({ title, author }) => {
  const book = document.createElement('li');
  const p = document.createElement('p');
  p.innerHTML = `${title} <br> ${author}`;
  book.append(p);
  const remove = document.createElement('button');
  remove.setAttribute('onclick', `remove('${title}')`);
  remove.innerText = 'remove';
  book.append(remove);
  const hr = document.createElement('hr');
  book.append(hr);
  booksShow.appendChild(book);
};

// loop the array of books to append data
for (let i = 0; i < books.length; i += 1) {
  createBookFromLocal(books[i]);
}

// function to remove books that has given title
function remove(title) {
  const removedBooks = books.filter((item) => item.title !== title);
  localStorage.setItem('books', JSON.stringify(removedBooks));
  window.location.reload();
}
/**
 * section to add books
 */

// add button
const button = document.getElementById('add');

// function to add books
const addBook = (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));
  window.location.reload();
};

// if click add data to local and reload the page
button.addEventListener('click', addBook);
