/*
    Javascript functions
*/

const text = function() {
    return "HI";
}

console.log(text());

const power = function(base, exponent) {
    return Math.pow(base, exponent);
}

console.log(power(2,5));


function Hello() {
    console.log("Hello world");
}
Hello();