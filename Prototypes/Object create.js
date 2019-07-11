var foo = {
    something: function () {
        console.log("Tell me something good...");
    }
};
var bar = Object.create(foo);
bar.something(); // Tell me something good...
/*
Object.create(..) creates a new object (bar) linked to the object we
specified (foo), which gives us all the power (delegation) of the [[Pro
totype]] mechanism, but without any of the unnecessary complica‐
tion of new functions acting as classes and constructor calls,
confusing .prototype and .constructor references, or any of that
extra stuff.

Object.create(null) creates an object that has an empty (aka
null) [[Prototype]] linkage, and thus the object can’t dele‐
gate anywhere. Since such an object has no prototype chain,
the instanceof operator (explained earlier) has nothing to
check, so it will always return false. These special empty-
[[Prototype]] objects are often called “dictionaries,” as they
are typically used purely for storing data in properties, most‐
ly because they have no possible surprise effects from any
delegated properties/functions on the [[Prototype]] chain,
and are thus purely flat data storage.
*/


var anotherObject = {
    a: 2
};
var myObject = Object.create(anotherObject, {
    b: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 3
    },
    c: {
        enumerable: true,
        writable: false,
        configurable: false,
        value: 4
    }
});
myObject.hasOwnProperty("a"); // false
myObject.hasOwnProperty("b"); // true
myObject.hasOwnProperty("c"); // true
myObject.a; // 2
myObject.b; // 3
myObject.c; // 4
console.log(Object.keys(myObject))
anotherObject.fun = function() {
    console.log("Funny");
}
myObject.fun();
myObject.a = 6;
console.log(anotherObject.a + " " + myObject.a);
console.log(anotherObject.b); // undefined.
console.log(Object.getPrototypeOf(myObject))
console.log(Object.getPrototypeOf(anotherObject))