function Person(first) {
    this.first = first;
}

var obj = new Person("manoj");

console.log(Person.prototype, "Person prototyp");
console.log(Person.prototype.constructor, "Person constructor")
console.log(Person.prototype.__proto__, "Person __proto__")
console.log(obj.__proto__, "obj __proto__")
console.log(obj.__proto__ === Person.prototype)

console.log(obj.first);


Person.prototype.rollNo = 69;

console.log(obj.rollNo, "Obj roll no");

var obj1 = Object.create(obj);

console.log(obj1.rollNo, "Obj1 roll no");
console.log(obj1.first, "Obj1 first");

var obj2 = Object.assign({},obj);
console.log(obj2.rollNo, "Obj2 roll no"); // Undefined. Assign only gives object it's properites. obj2 points to Object.prototype
console.log(obj2.first, "Obj2 first");
console.log(obj2.__proto__, "Obj2 __proto__");


// Changing obj values.

obj.first = "vamshi";

console.log(obj2.first, "Obj2 first"); // No change in obj2 values.

console.log(obj1.first, "Obj1 first"); // Shallow copy. change in object obj changes obj1 values. Since obj1.__proto__ === obj.prototype


// Updating Person.first.


Person.first = "Uttej";

console.log(obj.first, "Obj first");
console.log(obj1.first, "Obj1 first");
console.log(obj2.first, "Obj2 first");

var obj3 = Object.assign({}, obj1);

console.log(obj3.first, "Obj3 first");
console.log(obj3.rollNo, "Obj3 rollNo")

// Changing obj1 values
obj1.first = "hero";

console.log(obj3.first, "Obj3 first");