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

/* function Animal(name, energy) {
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
}; */

// function Animal(name, energy) {
//   this.name = name;
//   this.energy = energy;
// }
// Animal.prototype.eat = function (amount) {
//   console.log(`${this.name} is eating `);
//   this.energy += amount;
// };

// Animal.prototype.sleep = function (length) {
//   console.log(`${this.name} is sleeping`);
//   this.energy += length;
// };

// Animal.prototype.play = function (length) {
//   console.log(`${this.name} is playing`);
//   this.energy -= length;
// };
/* 
class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
  eat(amount) {
    console.log(`${this.name} is eating `);
    this.energy += amount;
  }
  sleep(length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
  }
  play(length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
  }
}
const milo = new Animal("Milo", 5);
const cami = new Animal("Camilia", 3);
cami.sleep(3);
milo.play(0.5);
console.log(milo);
console.log(cami);

for (let key in milo) {
  if (milo.hasOwnProperty(key)) {
    console.log(key + ": " + milo[key]);
  }
}
 */

//
class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
  eat(amount) {
    console.log(`${this.name} is eating `);
    this.energy += amount;
  }
  sleep(length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
  }
  play(length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
  }
}

class Dog extends Animal {
  constructor(name, energy, breed) {
    super(name, energy);
    this.breed = breed;
  }
  bark() {
    console.log("woof Woof");
    this.energy -= 0.5;
  }
}
