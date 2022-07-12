const book = (title, author, pages, read)  => {
	return Object.assign({title, author, pages, read})
}

const myLibrary = (function() {
	const books = [];

	const mainContainer = document.querySelector("main.container");
	const cardAdd = mainContainer.querySelector('.card-add');

	const AGoT = book(
		"A Game of Thrones",
		"George R. R. Martin",
		834,
		false
	);

	const leviathanWakes = book(
		"Leviathan Wakes",
		"James S. A. Corey",
		577,
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
