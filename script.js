//---Prototypal inheritance----
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

Hero.prototype.greet = function () {
  return `${this.name} say Hello`;
};

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);
  this.wepon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
};

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
};

const didi = new Hero("Didi Wu", 100);
console.log(didi.greet());

const nico = new Warrior("nico", 10, "axe");
console.log(nico);
console.log(nico.greet());

const siggy = new Healer("siggy", 10, "Black magic");
console.log(siggy);
console.log(siggy.greet());
