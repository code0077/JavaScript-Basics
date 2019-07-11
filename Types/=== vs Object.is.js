console.log(+0 === -0); //true
console.log(Object.is(+0, -0)); //false

console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); //true

console.log(Number.NaN === Number.NaN); // false
console.log(Object.is(Number.NaN, Number.NaN)); // true

console.log(NaN === Number.NaN); // false
console.log(Object.is(NaN, Number.NaN)); // true


/*
=== is called strict comparison operator in JavaScript. Object.is and strict comparison operator behave exactly the same except for NaN and +0/-0.
*/