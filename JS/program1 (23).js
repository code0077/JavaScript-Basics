/*
    Javascript ignore when number of parameters
    passed to a function exceeds accepted number
    of arguments
*/

const result = function(x, y) {
    return x+y;
}

console.log(result(5,10,11)); // Returns only 15. No error is thrown

console.log(result(5)); /* Returns Nan. Since y is undefined.
                         => undefined + 5 = Nan (Not a number)
                        */

const result1 = (x,y) => {
    return x+y;
}

console.log(result1(5,10)); // Returns only 15. No error is thrown




const power = function(base, exponent = 2) {
    return Math.pow(base,exponent);
}
console.log(power(2,5)); // Returns 32
console.log(power(2)); // Returns 4