function sum(a, b) {
  this.mynum = 11;
  return a + b;
}
sum();
console.log(sum(6, 2));
let sumNum = mynum + 11;
console.log(sumNum);

const calc = {
  num: 0,
  increment() {
    // console.log(this === calc); // => true
    this.num += 1;
    return this.num;
  },
};
console.log(calc.increment());
console.log(calc.increment());
console.log(calc.increment());
console.log(calc.increment());
