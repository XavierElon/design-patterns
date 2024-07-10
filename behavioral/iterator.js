class Book {
  constructor(title) {
    this.title = title
  }
}

// Concrete Aggregate
class BookCollection {
  constructor() {
    this.books = []
  }

  addBook(book) {
    this.books.push(book)
  }

  [Symbol.iterator]() {
    let index = 0
    const books = this.books
    return {
      next() {
        if (index < books.length) {
          return { value: books[index++], done: false }
        } else {
          return { done: true }
        }
      }
    }
  }
}

// Client Code
const collection = new BookCollection()
collection.addBook(new Book('Book 1'))
collection.addBook(new Book('Book 2'))
collection.addBook(new Book('Book 3'))

for (const book of collection) {
  console.log(book.title)
}
