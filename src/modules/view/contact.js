import Main from './main.js';

export default class extends Main {
  constructor(params) {
    super(params);
    this.setTitle('Contact Us');
  }

  // html section for contact
  getDoc = async () => `<section class="contact-me">
  <div class="container-contact-me">
      <h3 class="contact-h3">Contact Information</h3>
      <p>Do you want to contact me? Do you have any questions to ask me? You can reach out to me via this methods</p>
      <ul>
          <li>Our email: mail@mail.com</li>
          <li>Our Phone Number 004335874563</li>
          <li>Our address street name: 22,Rose Road,Ha Country</li>
      </ul>
  </div>
  
</section>`
}