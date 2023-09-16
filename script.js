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
