// This is the pattern in JavaScript we call module.
function cal() {
    var numbers = [1, 2, 3];
    function mul() {
        return numbers.map(i => i * 1);
    }

    function sum() {
        return numbers.map(i => i + 1);
    }
    return {
        multiply: mul,
        sums: sum
    }
}
var fun = cal();
console.log(fun.multiply());
console.log(fun.sums());



/* A slight variation on this pattern is
when you only care to have one instance, a singleton of sorts */
var foo = (function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];
    function doSomething() {
        console.log(something);
    } 
    function doAnother() {
        console.log(another.join(" ! "));
    }
    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
})();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3