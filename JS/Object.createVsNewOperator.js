function Dog() {
    this.name = "puppy";
}
Dog.prototype.breed = "white";
var ne = new Dog();
var cr = Object.create(Dog.prototype);
console.log("Using create");
console.log(cr.name); // undefined. Constructor code not executed!!!
console.log(cr.breed);
console.log("Using new");
console.log(ne.name); // puppy. Constructor code executed!!!
console.log(ne.breed);


function Animal() {
    this.name = "animals";
}
Animal.prototype.place = "zoo";
console.log(Animal.prototype, "Animal console")
var neA = new Animal();
console.log(neA);
console.log(neA.prototype, "NEW OBJECT PROTOTYPE");
var crA = Object.create(Animal.prototype);
console.log(crA.prototype, "CREATE OBJECT PROTOTYPE");
console.log(neA.name);
console.log(crA.name);