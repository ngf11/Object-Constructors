let user = {
  name: "Nicolas",
  surname: "fuentes",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};
let admin = {
  __proto__: user,
  isAdmin: true,
};
console.log(admin.fullName);
admin.fullName = "Didi Wu";
console.log(admin.fullName);
console.log(user.fullName);
