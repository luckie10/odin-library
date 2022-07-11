const myLibrary = []

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {
	
}

const AGoT = new Book(
		"A Game of Thrones",
		"George R. R. Martin",
		834,
		false
);
const leviathanWakes = new Book(
		"Leviathan Wakes",
		"James S. A. Corey",
		577,
		true
);

myLibrary.push(AGoT);
myLibrary.push(leviathanWakes);

myLibrary.forEach(book => render(book)); 

function render(book) {
	const mainContainer = document.querySelector("main.container");
	const cardAdd = mainContainer.querySelector('.card-add');
	const card = document.createElement('div');

	card.classList.add('card');
	
	Object.values(book).forEach(value => appendElement(value));

	mainContainer.insertBefore(card, cardAdd);

	function appendElement(content) {
		const element = document.createElement('div');
		element.textContent = content;
		card.appendChild(element);
	}
}