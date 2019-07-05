/**
 * Function declarations are hoisted. But function expressions
are not.
 */

foo(); // foo is not a function.
var foo = () => console.log("hero"); 

// Correct way:-

var f = () => console.log("Hero");
f();



foos(); // TypeError
bars(); // ReferenceError
var foos = function bars() {
// ...
};


// This snippet is more accurately interpreted (with hoisting) as:
var foo;
foo(); // TypeError
bar(); // ReferenceError
foo = function() {
var bar
// ...
}