/*
    Javascript arrow functions
*/

// 2 Parameters
const power = (base,exponent) => {
    return Math.pow(base,exponent);
}

console.log(power(2,5));

// Zero parameters
const text = () => {  return "Hello World"; }

console.log(text());

// Single parameter
const text1 = parameters => { return parameters + " is a good boy" }

console.log(text1("Manoj"));