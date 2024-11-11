'use strict';

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this._year = year;
    }

    get info() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this._year}`;
    }

    getDescription() {
        return `This is a book titled '${this.title}' by ${this.author}.`;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value === 'number') {
            this._year = value;
        } else {
            console.error('Error: Year must be a number.');
        }
    }
}

class PrintedBook extends Book {
    constructor(title, author, year, pageCount) {
        super(title, author, year);
        this._pageCount = pageCount;
    }

    get info() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this._year}, Pages: ${this._pageCount}`;
    }

    getDescription() {
        return `${super.getDescription()} It has ${this._pageCount} pages.`;
    }

    get pageCount() {
        return this._pageCount;
    }

    set pageCount(value) {
        if (typeof value === 'number' && value > 0) {
            this._pageCount = value;
        } else {
            console.error('Error: Page count must be a positive number.');
        }
    }
}

class Ebook extends Book {
    constructor(title, author, year, fileSize) {
        super(title, author, year);
        this._fileSize = fileSize; // Приватне поле для розміру файлу
    }

    get info() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this._year}, File Size: ${this._fileSize}MB`;
    }

    getDescription() {
        return `${super.getDescription()} File size is ${this._fileSize} MB.`;
    }

    get fileSize() {
        return this._fileSize;
    }

    set fileSize(value) {
        if (typeof value === 'number' && value > 0) {
            this._fileSize = value;
        } else {
            console.error('Error: File size must be a positive number.');
        }
    }
}

const printedBook = new PrintedBook(
    'The Great Gatsby',
    'F. Scott Fitzgerald',
    1925,
    180
);
console.log(printedBook.info);
console.log(printedBook.getDescription());

const ebook = new Ebook(
    'JavaScript: The Good Parts',
    'Douglas Crockford',
    2008,
    1.5
);
console.log(ebook.info);
console.log(ebook.getDescription());

printedBook.year = 1930;
console.log(printedBook.info);

printedBook.pageCount = -10;
