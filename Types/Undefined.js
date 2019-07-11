var a;
typeof a; // "undefined"
var b = 42;
var c;
// later
b = c;
typeof b; // "undefined"
typeof c; // "undefined"
/* 
An “undefined” variable is one that has been declared in the accessi‐
ble scope, but at the moment has no other value in it. By contrast, an
“undeclared” variable is one that has not been formally declared in
the accessible scope.
*/

var a;
a; // undefined
b; // ReferenceError: b is not defined

typeof a; // "undefined"
typeof b; // "undefined"

/*
The typeof operator returns "undefined" even for “undeclared” (or
“not defined”) variables. Notice that there was no error thrown
when we executed typeof b, even though b is an undeclared vari‐
able. This is a special safety guard in the behavior of typeof.
*/