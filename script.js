const setter = (state) => ({
	set: (name, value) => state[name] = value
})

const getter = (state) => ({
	get: (name) => state[name]
})

const bookFactory = (title, author, read) => {
	const state = {
		title,
		author,
		read
	}
	
	return Object.assign(
		{},
		setter(state),
		getter(state),
	);
}

const myLibrary = (function() {
	const books = [];

	const mainContainer = document.querySelector('main.container');
	const newBookButton = document.querySelector('.new-book-button');
	const newBookContainer = document.querySelector('.new-book-container');
	const titleInput = document.getElementById('title');
	const authorInput = document.getElementById('author');
	const readInput = document.getElementById('read');
	const submitNewBookButton = newBookContainer.querySelector('.submit-new-book');

	const AGoT = bookFactory(
		"A Game of Thrones",
		"George R. R. Martin",
		false
	);

	const leviathanWakes = bookFactory(
		"Leviathan Wakes",
		"James S. A. Corey",
		true
	);
	
	books.push(AGoT);
	books.push(leviathanWakes);

	render();

	newBookButton.addEventListener('click', openNewBookForm);
	submitNewBookButton.addEventListener('click', addNewBook);

	function render() {
		clearCards();
		books.forEach(libraryBook => createBookCard(libraryBook));
	}
	
	function openNewBookForm() {
		newBookContainer.classList.add('active');
	}
	
	function closeNewBookForm() {
		newBookContainer.classList.remove('active');
	}
	
	function addNewBook() {
		const newBook = getBookFromInput();
		books.push(newBook);	
		
		resetInputFields();
		closeNewBookForm();
		render();
	}

	function getBookFromInput() {
		const title = titleInput.value;
		const author = authorInput.value;
		const read = readInput.checked;
		
		return bookFactory(title, author, read);	
	}
	
	function resetInputFields() {
		titleInput.value = '';
		authorInput.value = '';
		readInput.checked = false;
	}
	
	function clearCards() {
		while (mainContainer.firstChild){
			mainContainer.removeChild(mainContainer.firstChild);
		}
	}

	function createBookCard(book) {
		const card = document.createElement('div');
		const title = document.createElement('p');
		const author = document.createElement('p');
		const read = document.createElement('p');

		card.classList.add('card');
		
		title.textContent = book.get('title');
		author.textContent = book.get('author');
		read.textContent = book.get('read');
		
		card.appendChild(title);
		card.appendChild(author);
		card.appendChild(read);
		mainContainer.appendChild(card);
	}
	
	return {};
})();
