//---Prototypal inheritance----

function Human(name, age, says) {
  this.name = name;
  this.age = age;
  this.says = says;
}

Human.prototype.greet = function () {
  console.log(`${this.name} says ${this.says}. I am ${this.age} years old`);
};

function Animal(name, age, says, type) {
  Human.call(this, name, age, says);
  this.type = type;
}

Object.setPrototypeOf(Animal.prototype, Human.prototype);

const nico = new Human("nico", 34, "hi");
nico.greet();

const milo = new Animal("Milo", 10, "woof", "dog");
milo.greet();
