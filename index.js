function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
Player.prototype.getMarker = function () {
  console.log(`My marker is '${this.marker}'`);
};

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hi! my name is ${this.name}`);
};

Object.setPrototypeOf(Player.prototype, Person.prototype);

const playerOne = new Player("nico", "X");
const playerTwo = new Player("Siggy", "O");
const playerThree = new Player("Didi Wu Tintin", "@");
playerOne.sayName();
