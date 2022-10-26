import Main from './main.js';

export default class extends Main {
  constructor(params) {
    super(params);
    this.setTitle('Add Books');
  }

  getDoc = async () => `<section class="area">
    <h3>Add a New Book</h3>

    <form id="bookForm">
        <input type="text" placeholder="title" id="title" maxlength="30">
        <br><br>
        <input type="text" placeholder="Author" id="author" maxlength="30">
        <br><br>
        <button id="add" type="submit">Add</button>
    </form>
    </section>`
}