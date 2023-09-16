/* class Person {
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

class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
  play(length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
  }

  eat(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
  }
  sleep(length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
  }
}

class Dog extends Animal {
  constructor(name, energy, breed) {
    super(name, energy);
    this.breed = breed;
  }
  bark() {
    console.log("Woof Woof");
    this.energy -= 0.5;
  }
}

const milo = new Dog("Milo", 6, "Bulldog");
console.log(milo);
console.log(milo.eat(2));
console.log(milo.bark());
