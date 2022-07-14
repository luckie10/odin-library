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

	const mainContainer = document.querySelector("main.container");
	const cardAdd = mainContainer.querySelector('.card-add');

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

	function render() {
		clearCards();
		books.forEach(libraryBook => createBookCard(libraryBook));
		createNewBookCard();
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
