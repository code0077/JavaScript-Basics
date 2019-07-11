console.log(typeof null === "object"); // true
// check for null.
var a = null;
console.log(!a && typeof a === "object"); // true
var b = undefined;
console.log(!b + " " + !a) // true true
console.log(typeof b)
var undefined = undefined;
console.log(typeof undefined);

// The first typeof 42 returns "number", and typeof "number" is "string"
console.log(typeof typeof 43)

/*
In JavaScript, variables don’t have types—values have types. Variables
can hold any value, at any time.
*/