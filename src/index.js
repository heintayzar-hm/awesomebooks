// creating array of objects
const books = [
    {
        title: 'How to Code in Javascript',
        author: 'Mudasir Issah'
    },
    {
        title: 'How to Code in Ruby',
        author: 'Hein Tay Zar'
    }
];

let button = document.getElementById('add');

button.addEventListener('click', (e) => {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    books.push({title,author});
    localStorage.setItem('book',JSON.stringify(books));
    e.preventDefault();
})