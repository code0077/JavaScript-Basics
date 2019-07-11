/**
 * An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

(function () {
    statements
})();
 */
(function (string) {
    console.log(string);
})("hello world");

var f = (function (v) {
    return 8 + v;
})(6);

console.log(f);

var result = (function () {
    var name = "Barry";
    return name;
})();
console.log(result);

( (v) =>{
    console.log(v);
})("hero");

let value = ( (v) =>{
    return v;
})("hero");

console.log(value)