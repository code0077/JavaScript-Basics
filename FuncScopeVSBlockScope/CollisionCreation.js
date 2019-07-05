function foo() {
    function bar(a) {
        i = 3; // changing the `i` in the enclosing scope's
        // for-loop
        console.log(a + i);
    }
    for (var i = 0; i < 10; i++) {
        bar(i * 2); // oops, inifinite loop ahead!
    }
}
foo();

/***
 * The i = 3 assignment inside of bar(..) overwrites, unexpectedly, the
i that was declared in foo(..) at the for loop. In this case, it will result
in an infinite loop, because i is set to a fixed value of 3 and that will
forever remain < 10.
The assignment inside bar(..) needs to declare a local variable to use,
regardless of what identifier name is chosen. var i = 3; would fix
 */