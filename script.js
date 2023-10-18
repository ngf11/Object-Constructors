let arr = ["nico", "fuentes"];
//arr.__proto__ = Array.prototype= Object.prototype = null

let obj = {
  name: "nico",
  city: "Montevideo",
  sayHi: function () {
    console.log(`Hi, I am ${this.name}`);
  },
};
//obj.__proto__ = Object.protoType =null
function fun() {}
// fun.__proto__ = function.pototype = Objecj.prototype
