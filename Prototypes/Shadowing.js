var anotherObject = {
    a: 2
};
var myObject = Object.create(anotherObject);
anotherObject.a; // 2
myObject.a; // 2
anotherObject.hasOwnProperty("a"); // true
myObject.hasOwnProperty("a"); // false
myObject.a++; // oops, implicit shadowing!
anotherObject.a; // 2
myObject.a; // 3
myObject.hasOwnProperty("a"); // true   
/*
Though it may appear that myObject.a++ should (via delegation) look
up and just increment the anotherObject.a property itself in place,
instead the ++ operation corresponds to myObject.a = myObject.a
+ 1. The result is [[Get]] looking up a property via [[Prototype]]
to get the current value 2 from anotherObject.a, incrementing the
value by one, then [[Put]] assigning the 3 value to a new shadowed
property a on myObject. Oops!
Be very careful when dealing with delegated properties that you mod‐
ify. If you wanted to increment anotherObject.a, the only proper way
is anotherObject.a++.
*/