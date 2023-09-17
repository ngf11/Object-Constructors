function Users(name) {
  this.name = name;
  console.log(this);
}

const nico = new Users("nico");
console.log(nico);
