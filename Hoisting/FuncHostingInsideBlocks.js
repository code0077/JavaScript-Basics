/*
Function declarations that appear inside of normal blocks typically
hoist to the enclosing scope, rather than being conditional as this code
implies:
*/

foo(); // "b"
var a = true;
if (a) {
    function foo() { console.log("a"); }
}
else {
    function foo() { console.log("b"); }
}

/*
it’s probably best
to avoid declaring functions in blocks.
*/