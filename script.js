function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.talk = function () {
  return `Hi, my name is ${this.name}. I am ${this.age} years old`;
};
const me = new User("nico", 34);
console.log(me);
console.log(me.talk());
