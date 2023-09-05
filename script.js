function book(titel, author, pages, read) {
  this.titel = titel;
  this.author = author;
  this.pages = pages;
  this.read = "Read" || "Not read" || "in progress";
  this.info = function () {
    return `${titel} by ${author}, ${pages} pages. ${read}`;
  };
}
book.prototype.sayHello = function () {
  return `Hi, i am a good book by ${this.author}`;
};

const dailyStoic = new book("Daily Stoic", "Ryan Holiday", 366, "in progress");
const youCantHurtMe = new book(
  "You Can't Hurt me",
  "David Goggins",
  444,
  "in progress"
);
console.log(dailyStoic.info());
console.log(dailyStoic.sayHello());
console.log(youCantHurtMe.info());
console.log(Object.getPrototypeOf(dailyStoic) === book.prototype);
console.log(Object.getPrototypeOf(youCantHurtMe) === book.prototype);
console.log(dailyStoic.valueOf());
console.log(dailyStoic.hasOwnProperty("valueOf"));
console.log(Object.prototype.hasOwnProperty("valueOf"));
