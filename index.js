function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.info = function () {
  return ` The titel of the book is ${this.name} by ${this.author}. ${this.name} has ${this.pages} pages. Read: ${this.read}`;
};
const beHereNow = new Book("Be Here Now", "Ram Dass", 369, "In Progress");
console.log(beHereNow);
console.log(beHereNow.info());
console.log(Object.getPrototypeOf(beHereNow) === Book.prototype);
//---Prototypal inheritance----
console.log(Object.getPrototypeOf(Book.prototype) === Object.prototype);
console.log(beHereNow.valueOf());
console.log(Book.hasOwnProperty("valueOf"));
console.log(Object.prototype.hasOwnProperty("valueOf"));
console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));
