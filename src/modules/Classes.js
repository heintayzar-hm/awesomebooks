export default class Books {
  constructor(books) {
    this.books = books;
  }

  get() {
    return this.books;
  }

  update() {
    this.books = JSON.parse(localStorage.getItem('books'));
  }

  // method to add book by geting data from parameters
  addBook({ e, title, author }) {
    this.books.push({ title, author });
    // addd to class
    this.bookToDom(title, author);
    localStorage.setItem('books', JSON.stringify(this.books));
    const form = document.querySelector('form');
    form.reset();

    // update data from local
    this.update();

    // redirect to list section
    window.location.assign('#list');
    e.preventDefault();
  }

  // select the nav items
  showList= () => {
    const addbook = document.querySelector('.area');
    const showbook = document.querySelector('.show-book-list');
    const contactme = document.querySelector('.contact-me');
    showbook.style.display = 'flex';
    addbook.style.display = 'none';
    contactme.style.display = 'none';
  }
  // method to create books and append to dom

  createBookFromLocal() {
    // no books no show
    if (this.books.length === 0) {
      window.location.assign('#add');
    }
    // show the books
    for (let i = 0; i < this.books.length; i += 1) {
      const booksShow = document.querySelector('.books-show');
      booksShow.style.display = 'block';
      const book = this.bookToDom(this.books[i].title, this.books[i].author);
      booksShow.appendChild(book);
    }
  }

  // create list elemnt for books
  bookToDom(title, author) {
    const book = document.createElement('li');
    book.setAttribute('title', title);
    const p = document.createElement('p');
    p.innerHTML = `${title} by ${author}`;
    book.append(p);
    const remove = document.createElement('button');
    remove.innerText = 'remove';
    remove.addEventListener('click', () => {
      this.remove(title);
    });
    book.append(remove);
    return book;
  }
  // method to remove li by getting title

  remove(title) {
    const removedBooks = this.books.filter((item) => item.title !== title);
    localStorage.setItem('books', JSON.stringify(removedBooks));
    const removedBook = document.querySelector(`li[title='${title}']`);
    removedBook.remove();
    this.update();
    removedBook.style.display = 'none';
    if (this.books.length === 0) {
      const booksShow = document.querySelector('.books-show');
      booksShow.style.display = 'none';
      window.location.assign('#add');
    }
  }
}
