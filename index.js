let animal = {
  eat: true,
  walk() {
    return "Animal walk";
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

rabbit.walk = function () {
  return "Rabbit! Bounce-bounce!";
};
let longEar = {
  earLength: 10,
  __proto__: animal,
};
console.log(rabbit.eat);
console.log(rabbit.walk());
console.log(longEar.walk());
