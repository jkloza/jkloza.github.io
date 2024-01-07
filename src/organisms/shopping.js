export class Book {
  constructor(id, title, author, available) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.available = available;
  }
  updateAvailability(newAvailability) {
    this.available = newAvailability;
  }
}

export class Library extends Book {
  constructor(books) {
    super();
    this.books = [];
  }
  addBook(book) {
    // Given a book, check if that exists in the catalogue, and add if it does not
    if (this.books.findIndex((libraryBook) => libraryBook.id === book.id) === -1) {
      this.books.push(book);
    }
  }
  borrowBook(title) {
    // If book exists and is available, set to false to borrow book
    const book = this.books.find((libraryBook) => libraryBook.title === title);
    if (book && book.available) {
      book.updateAvailability(false);
    } else if (book && !book.available) {
      console.log('Book is unavailable and cannot be borrowed.');
    } else {
      console.log('Error: book not found.');
    }
  }
  returnBook(title) {
    // If book exists and is checked out, return book
    // If book exists and is available, set to false to borrow book
    const book = this.books.find((libraryBook) => libraryBook.title === title);
    if (book && !book.available) {
      book.updateAvailability(true);
    } else if (book && book.available) {
      console.log('Book is already available, no need to return.');
    } else {
      console.log('Error: book not found.');
    }
  }
}

// Usage
const book1 = new Book(1, 'East of Eden', 'John Steinbeck', true);
const book2 = new Book(2, 'How To Do Nothing', 'Jenny Odell', true);
const book3 = new Book(3, 'Harry Potter', 'JK Rowling', true);

const library = new Library([book1]);
// Add 2 books to library
library.addBook(book2);
library.addBook(book3);
console.log('Library after additional books:', library.books);

library.borrowBook('East of Eden');
console.log(`${book2.title} is ${book2.availability ? 'available' : 'not available'}`);

library.borrowBook('How To Do Nothing');
library.returnBook('East of Eden');
