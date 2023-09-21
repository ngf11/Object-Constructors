let x = {};
console.log(x.__proto__ === Object.prototype);
console.log(Object.getPrototypeOf(x));
console.log(x.constructor);

let y = [];
console.log(y.__proto__.__proto__);
console.log(y.__proto__ === Array.prototype);
console.log(y.__proto__.__proto__ === Object.prototype);

Array.prototype.isPrototypeOf(y); // true
Object.prototype.isPrototypeOf(Array); // true

y instanceof Array; // true
