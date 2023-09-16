let arr = ["nico", "fuentes"];
let object = {
  name: "nico",
  city: "Kearny",
  getIntro: function () {
    console.log(`Hi min name is ${this.name}. I'm from ${this.city}`);
  },
};

console.log(arr.__proto__);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(Object.__proto__ === Object.prototype);
console.log(Object.__proto__.__proto__ === Object.prototype);
