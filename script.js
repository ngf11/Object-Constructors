//---Prototypal inheritance----

let animal = {
  eats: true,
  walk() {
    console.log("Animal Walking");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};
rabbit.walk = function () {
  console.log("Rabbit! Bounce Bouce!");
};
rabbit.walk();

let longEar = {
  earLenght: 10,
  __proto__: rabbit,
};

longEar.walk();
console.log(longEar.jumps);
console.log(longEar.eats);
