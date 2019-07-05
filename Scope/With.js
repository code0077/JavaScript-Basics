/***
 * The other frowned-upon (and now deprecated!) feature in JavaScript
that cheats lexical scope is the with keyword. There are multiple valid
ways that with can be explained, but I will choose here to explain it
from the perspective of how it interacts with and affects lexical scope.
with is typically explained as a shorthand for making multiple property
references against an object without repeating the object reference
itself each time.

While the eval(..) function can modify existing lexical scope if it
takes a string of code with one or more declarations in it, the with
statement actually creates a whole new lexical scope out of thin air, from
the object you pass to it.

Compiler asks Scope to see if a variable a
already exists for that particular scope collection. If so, Compiler
ignores this declaration and moves on. Otherwise, Compiler asks
Scope to declare a new variable called a for that scope collection.
 */

var obj = {
    a: 1,
    b: 2,
    c: 3
}

// without with
obj.a = 5;
obj.b = 6;
obj.c = 7;

with (obj) {
    a = 3;
    b = 4;
    c = 5;
}
//console.log(obj.a);


function foo(obj) {
    with (obj) {
        a = 2;
    }
}
var o1 = {
    a: 3
};
var o2 = {
    b: 3
};
foo(o1);
console.log(o1.a); // 2
console.log(o1.b) // undefined

foo(o2);
console.log(o2.a); // undefined
console.log(o2.b); // 3


console.log(a); // 2—Oops, leaked global!
// console.log(b); // Error