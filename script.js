// role-playing game.

function Hero(name, level) {
  this.name = name;
  this.level = level;
}

let hero1 = new Hero("didi wu tintin", 1);
console.log(hero1);
Hero.prototype.greet = function () {
  return `${this.name} say Hi!`;
};
