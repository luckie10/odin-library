class Book {
  #properties = {};

  constructor(title, author, read) {
    this.#properties.title = title;
    this.#properties.author = author;
    this.#properties.read = read;
  }

  set(name, value) {
    this.#properties[name] = value;
  }

  get(name) {
    return this.#properties[name];
  }

  toggleRead() {
    this.#properties.read = !this.#properties.read;
  }
}

// eslint-disable-next-line no-unused-vars
const myLibrary = (function library() {
  const books = [];

  const mainContainer = document.querySelector('main.container');
  const newBookButton = document.querySelector('.new-book-button');
  const newBookContainer = document.querySelector('.new-book-container');
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const readInput = document.getElementById('read');
  const submitNewBookButton =
    newBookContainer.querySelector('.submit-new-book');

  const AGoT = new Book('A Game of Thrones', 'George R. R. Martin', false);
  const leviathanWakes = new Book(
    'Leviathan Wakes',
    'James S. A. Corey',
    true
  );

  books.push(AGoT);
  books.push(leviathanWakes);

  function openNewBookForm() {
    newBookContainer.classList.add('active');
  }

  function closeNewBookForm() {
    newBookContainer.classList.remove('active');
  }

  function getBookFromInput() {
    const title = titleInput.value;
    const author = authorInput.value;
    const read = readInput.checked;

    return new Book(title, author, read);
  }

  function resetInputFields() {
    titleInput.value = '';
    authorInput.value = '';
    readInput.checked = false;
  }

  function clearCards() {
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
    }
  }

  function getBookTitle(element) {
    const cardElement = element.closest('.card');
    return cardElement.querySelector('.title').textContent;
  }

  function createBookCard(book) {
    const card = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const read = document.createElement('button');
    const deleteButton = document.createElement('button');

    card.classList.add('card');
    title.classList.add('title');

    title.textContent = book.get('title');
    author.textContent = book.get('author');
    deleteButton.textContent = 'Delete';
    if (!book.get('read')) read.textContent = 'Mark Read';
    else read.textContent = 'Done';

    deleteButton.addEventListener('click', deleteBook);
    read.addEventListener('click', markRead);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(read);
    card.appendChild(deleteButton);
    mainContainer.appendChild(card);
  }

  function render() {
    clearCards();
    books.forEach((libraryBook) => createBookCard(libraryBook));
  }

  function addNewBook() {
    const newBook = getBookFromInput();
    books.push(newBook);

    resetInputFields();
    closeNewBookForm();
    render();
  }

  function deleteBook() {
    const title = getBookTitle(this);

    const index = books.findIndex((book) => book.get('title') === title);
    books.splice(index, 1);

    render();
  }

  function markRead() {
    const title = getBookTitle(this);

    books.forEach((book) => {
      if (book.get('title') === title) book.toggleRead();
    });
    render();
  }

  render();

  newBookButton.addEventListener('click', openNewBookForm);
  submitNewBookButton.addEventListener('click', addNewBook);

  return {};
})();
