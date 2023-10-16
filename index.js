function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.SayName = function () {
    console.log(`Hi my name is ${this.name}`);
  };
}

const nico = new Player("nico", "X");
const didi = new Player("Didi wu TinTin", "O");
console.log(nico);
console.log(didi);
console.log(nico.name);
console.log(didi.name);
console.log(nico.marker);
console.log(didi.marker);
nico.SayName();
didi.SayName();
