var a = 2 / "foo"; // NaN
typeof a === "number"; // true
console.log(NaN !== NaN);

var b = "66";

console.log(b === NaN);
console.log(isNaN(b))

var b = "foo";

console.log(b === NaN); // false...
console.log(isNaN(b)) // true!!!

console.log(Number.isNaN(b)) // false

/*
Clearly, "foo" is literally not a number, but it’s definitely not the NaN
value either! This bug has been in JS since the very beginning (over
19 years of ouch).
As of ES6, finally a replacement utility has been provided: Num
ber.isNaN(..).
*/