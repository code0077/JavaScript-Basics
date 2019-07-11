/*
    Javascript Closures
*/

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
console.log(add5);
console.log(add5(4)); // Returns 9




function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
console.log(myFunc);
myFunc();



function addNumbers(x) {
    function addNumber(y) {
        return x + y;
    }
    return addNumber;
}
var add = addNumbers(5);
console.log(add);
console.log(add(10));


function wrapValue(n) {
    let value = n;
    return () => value;
}
let wrap1 = wrapValue(5);
let wrap2 = wrapValue(10);
console.log(wrap1() + wrap2());



/* Factorial of a number using Closure */

function fact(n) {
    var f = 1;
    function cal() {
        for (var i = 1; i <= n; i++) {
            f = f * i;
        }
        return f;
    }
    return cal;
}
var factorial = fact(5);
var value = factorial();
console.log(value);


/* Sum of even numbers till number "n" using Closure */

function Sum(n) {
    function even() {
        var evenSum = 0;
        for (var i = 1; i <= n; i++) {
            if (i % 2 == 0) {
                evenSum = evenSum + i;
            }
        }
        return evenSum;
    }
    return even;
}
var calc = Sum(5);
var result = calc();
console.log(result);

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41


function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
// it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8


