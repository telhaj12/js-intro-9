// Part 1
class Author {
    constructor(firstName, lastName, country, arrayOfBooks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.books = arrayOfBooks;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getBooks() {
        return this.books;
    }
}

// Part 2 

class Book {
    constructor(title, genre, page) {
        this.title = title;
        this.genre = genre;
        this.page = page;
    }
}

// Part 3
const book1 = new Book('Game of Thrones', 'Epic Fantasy', 694);
const book2 = new Book('Clash of Kings', 'Epic Fantasy', 768);
const book3 = new Book('Storm of Swords', 'Epic Fantasy', 973);

const author1 = new Author('George R.R', 'Martin', 'United States', [book1, book2, book3]);
console.log(author1.getFullName())
const books = [book1, book2, book3];
for (const book of author1.getBooks()) {
    console.log(book)
}

// Part 4
function Author1(firstName, lastName, country, arrayOfBooks) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.books = arrayOfBooks;
}

Author1.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

Author1.prototype.getBooks = function () {
    return this.books;
}

function Book1 (title, genre, page) {
    this.title = title;
    this.genre = genre;
    this.page = page;
}

const book01 = new Book1('Game of Thrones', 'Epic Fantasy', 694);
const book02 = new Book1('Clash of Kings', 'Epic Fantasy', 768);
const book03 = new Book1('Storm of Swords', 'Epic Fantasy', 973);

const author01 = new Author('George R.R', 'Martin', 'United States', [book01, book02, book03]);
console.log(author1.getFullName())
const book = [book1, book2, book3];
for (const book of author1.getBooks()) {
    console.log(book)
}