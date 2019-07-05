/***
 * We’ve seen that we can take any snippet of code and wrap a function
around it, and that effectively “hides” any enclosed variable or function
declarations from the outside scope inside that function’s inner scope.
For example:

While this technique works, it is not necessarily very ideal. There are
a few problems it introduces. The first is that we have to declare a
named-function foo(), which means that the identifier name foo itself
“pollutes” the enclosing scope (global, in this case). We also have to
explicitly call the function by name (foo()) so that the wrapped code
actually executes.
It would be more ideal if the function didn’t need a name (or, rather,
the name didn’t pollute the enclosing scope), and if the function could
automatically be executed.
 */

var a = 2;
function foo() {
    var a = 3;
    console.log(a); // 3
}
foo();
console.log(a); // 2

// Solution:- The function is treated as a functionexpression.
(function foo() { // <-- insert this
    var a = 3;
    console.log(a); // 3
})();