/* let animal = {};
animal.name = "Milo";
animal.energy = 10;

animal.eat = function (amount) {
  console.log(`${this.name} is eating `);
  this.energy += amount;
};

amimal.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

amimal.play = function (length) {
  console.log(`${this.name} is playing`);
  this.energy -= length;
};
let animalMethods = {
    eat: function (amount) {
        console.log(`${this.name} is eating `);
        this.energy += amount;
    },
    
    sleep: function (length) {
        console.log(`${this.name} is sleeping`);
        this.energy += length;
    },
    
    play: function (length) {
        console.log(`${this.name} is playing`);
        this.energy -= length;
    },
};
*/

function Animal(name, energy) {
  let animal = Object.create(Animal.prototype);
  animal.name = name;
  animal.energy = energy;

  return animal;
}
Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating `);
  this.energy += amount;
};

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing`);
  this.energy -= length;
};
const milo = Animal("Milo", 5);
const cami = Animal("Camilia", 3);
cami.sleep(3);
milo.play(0.5);
console.log(milo);
console.log(cami);
