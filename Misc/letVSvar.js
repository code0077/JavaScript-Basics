/**
 * Problems with var
 */

var v = "hello";
var v = "hero";

console.log(v);

/***
 * Let solves above problem with var.
 */

let v1 = "df";

//Throws error if this statement is used!!! let v1 = "ee"; 
console.log(v1);


/***
 * Var Hoisting.
 * Initializing and declaring later.
 */

myName = 'Chris';

function logName() {
    console.log(myName);
}

logName();

var myName;


/***
 * Let:- block scope.
 */
let f = 1;
if (f) {
    let f = 2; // Updating a new variable!!!
    console.log(f);
}
console.log(f);

/***
 * Var:- Global scope
 */
var f1 = 1;
if (f1) {
    var f1 = 5; // Updating the same variable!!!
    console.log(f1); 
}
console.log(f1);