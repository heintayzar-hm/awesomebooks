import Main from './main.js';

export default class extends Main {
  constructor(params) {
    super(params);
    this.setTitle('Add Books');
  }

  // html section for contact
  getDoc = async () => `<section class="area">
    <h3>Add a New Book</h3>

    <form id="bookForm">
        <input type="text" placeholder="Title" id="title" maxlength="30">
        <br><br>
        <input type="text" placeholder="Author" id="author" maxlength="30">
        <br><br>
        <button id="add-books" type="submit">Add</button>
    </form>
    </section>`

  getJs = async (books) => {
    // add button
    const button = document.getElementById('add-books');
    // if click add btn, data to local
    button.addEventListener('click', (e) => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      books.addBook({ e, title, author });
    });
  }
}