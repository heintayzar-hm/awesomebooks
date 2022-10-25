export default class Books {
  constructor(books) {
    this.books = books;
  }

  get() {
    return this.books;
  }

  // method to add book by geting data from dom
  addBook(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    this.books.push({ title, author });
    localStorage.setItem('books', JSON.stringify(this.books));
    window.location.reload();
  }
  // method to create books and append to dom

  createBookFromLocal() {
    for (let i = 0; i < this.books.length; i += 1) {
      const booksShow = document.querySelector('.books-show');
      booksShow.style.display = 'block';
      const book = document.createElement('li');
      const p = document.createElement('p');
      p.innerHTML = `${this.books[i].title} by ${this.books[i].author}`;
      book.append(p);
      const remove = document.createElement('button');
      remove.innerText = 'remove';
      remove.addEventListener('click', () => {
        this.remove(this.books[i].title);
      });
      book.append(remove);
      booksShow.appendChild(book);
    }
  }

  // method to remove li by getting title
  remove(title) {
    const removedBooks = this.books.filter((item) => item.title !== title);
    localStorage.setItem('books', JSON.stringify(removedBooks));
    window.location.reload();
  }
}
