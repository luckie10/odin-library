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

	function createBookCard(libBook) {
		const card = document.createElement('div');
		card.classList.add('card');
		
		Object.values(libBook).forEach(value => appendElement(value));
		mainContainer.insertBefore(card, cardAdd);

		function appendElement(content) {
			const element = document.createElement('div');
			element.textContent = content;
			card.appendChild(element);
		}

	}
	
	function createNewBookCard() {
		const card = document.createElement('div');
		card.classList.add('card');
		card.classList.add('card-add');

		const button = document.createElement('button');
		button.textContent = 'New Book';
		card.appendChild(button);

		mainContainer.appendChild(card);
	}
	
	return {};
})();
