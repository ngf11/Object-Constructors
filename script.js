/* const personMethod = {
  lifting(length) {
    console.log(`${this.name} is lifting`);
    this.energy -= length;
  },
  studing(length) {
    console.log(`${this.name} is studing`);
    this.energy -= length;
  },
  eating(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
  },
  sleep(length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
  },
};

function Person(name, energy) {
  let person = Object.create(personMethod);
  person.name = name;
  person.energy = energy;

  return person;
}

const nico = Person("nico", 8);
const didiWU = Person("Didi Wu", 100);
const siggy = Person("Siggy", 5);

didiWU.eating(10);
nico.studing(5);
siggy.sleep(5);
console.log(didiWU, nico, siggy);
 */

/* function Person(name, energy) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.energy = energy;

  return person;
}

Person.prototype.lifting = function (length) {
  console.log(`${this.name} is lifting`);
  this.energy -= length;
};
Person.prototype.studing = function (length) {
  console.log(`${this.name} is studing`);
  this.energy -= length;
};
Person.prototype.eating = function (amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};
Person.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

const nico = Person("nico", 8);
const didiWU = Person("Didi Wu", 100);
const siggy = Person("Siggy", 5);
didiWU.eating(10);
nico.studing(5);
siggy.sleep(5);
console.log(didiWU, nico, siggy); */
/* 
function Person(name, energy) {
  this.name = name;
  this.energy = energy;
}

Person.prototype.lifting = function (length) {
  console.log(`${this.name} is lifting`);
  this.energy -= length;
};
Person.prototype.studing = function (length) {
  console.log(`${this.name} is studing`);
  this.energy -= length;
};
Person.prototype.eating = function (amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};
Person.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

const nico = new Person("nico", 8);
const didiWU = new Person("Didi Wu", 100);
const siggy = new Person("Siggy", 5);
didiWU.eating(10);
nico.studing(5);
siggy.sleep(5);
console.log(didiWU, nico, siggy); */
/* 
class Person {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
  lifting(length) {
    console.log(`${this.name} is lifting`);
    this.energy -= length;
  }
  studing(length) {
    console.log(`${this.name} is studing`);
    this.energy -= length;
  }
  eating(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
  }
  sleep(length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
  }
}

const nico = new Person("nico", 8);
const didiWU = new Person("Didi Wu", 100);
const siggy = new Person("Siggy", 5);
didiWU.eating(10);
nico.studing(5);
siggy.sleep(5);
console.log(didiWU, nico, siggy);
 */
/* 
function Person(name, energy) {
  this.name = name;
  this.energy = energy;
}

Person.prototype.lifting = function (length) {
  console.log(`${this.name} is lifting`);
  this.energy -= length;
};
Person.prototype.studing = function (length) {
  console.log(`${this.name} is studing`);
  this.energy -= length;
};
Person.prototype.eating = function (amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};
Person.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

const nico = new Person("nico", 8);
const didiWU = new Person("Didi Wu", 100);
const siggy = new Person("Siggy", 5);
didiWU.eating(10);
nico.studing(5);
siggy.sleep(5);
console.log(didiWU, nico, siggy);

for (let key in nico) {
  console.log(`Key: ${key}. Value: ${nico[key]}`);
}

for (let key in nico) {
  if (nico.hasOwnProperty(key)) {
    console.log(`Key: ${key}. Value: ${nico[key]}`);
  }
}
 */

/*
This is wastful we should use inheretance 

function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

Animal.prototype.PLAY = function (length) {
  console.log(`${this.name} is playing`);
  this.energy -= length;
};

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};
Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

// const milo = new Animal("Milo", 5);
// const koda = new Animal("Koda", 8);

 function Dog(name, energy, breed) {
this.name = name;
  this.energy = energy;
  this.breed = breed;
}

Dog.prototype.PLAY = function (length) {
  console.log(`${this.name} is playing`);
  this.energy -= length;
};

Dog.prototype.eat = function (amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};
Dog.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

Dog.prototype.bark = function () {
  console.log("Woof Woof");
  this.energy -= 0.5;
};
const milo = new Dog("Milo", 5, "Bulldog");
const koda = new Dog("Koda", 8, "Pitbull"); */

function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

Animal.prototype.PLAY = function (length) {
  console.log(`${this.name} is playing`);
  this.energy -= length;
};

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};
Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

function Dog(name, energy, breed) {
  Animal.call(this, name, energy);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
  console.log("Woof Woof");
  this.energy -= 0.5;
};
Dog.prototype.constructor = Dog;
const milo = new Dog("Milo", 6, "Bulldog");
console.log(milo);
console.log(milo.eat(2));
console.log(milo.bark());
