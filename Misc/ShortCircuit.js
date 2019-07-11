/*
    Short-Circutting of Logical operators
*/

console.log(null || "empty")
console.log("empty" || "value");

var empty;

var value = empty || "hello";

console.log(value);

var value1 = "hello" || empty;
console.log(value1);