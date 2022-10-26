import Main from './main.js';

export default class extends Main {
  constructor(params) {
    super(params);
    this.setTitle('Show Books');
  }

  getDoc = async () => ` <section class="show-book-list">
  <h1>All Awesome Books</h1>
  <ul class="books-show books-list">
  </ul>
</section>`
}