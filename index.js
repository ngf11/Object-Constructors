// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
};

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);
  this.weapon = weapon;
}
// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// All other prototype methods added below
Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
};

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
};

const hero1 = new Hero("Didi Wu TinTin", 1);
const hero2 = new Warrior("Nico", 1, "axe");
const hero3 = new Healer("Siggy", 1, "Black Magick");

console.log(hero1);
console.log(Object.getPrototypeOf(hero1)); //Hero
console.log(hero1.greet());
console.log(hero2.attack());
console.log(hero2.greet());
