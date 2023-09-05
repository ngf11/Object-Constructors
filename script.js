function Person(name, age) {
  this.name = name;
  this.age = age;
  this.activity = this.activity;
}

const user1 = new Person("nico", 34, "lifting");
const user2 = new Person("didi", 3, "jumping");

Person.prototype.sayHi = function (name, age, workOuts) {
  return `Hi, my name is ${this.name}. I am ${this.age}.`;
};
Person.prototype.work = (name, activity) => {
  return `${this.name} enjoys`;
};
console.log(user1.sayHi());
