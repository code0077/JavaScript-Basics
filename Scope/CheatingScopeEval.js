function foo(str, a) {
    eval(str); // cheating!
    console.log(a, b);
}
var b = 2;
foo("var b = 3;", 1); // 1, 3


function foo1(str) {
    "use strict";
    eval(str);
    console.log(a); // ReferenceError: a is not defined
}
foo1("var a = 2");

/***
 * The string "var b = 3;" is treated, at the point of the eval(..) call,
as code that was there all along. Because that code happens to declare
a new variable b, it modifies the existing lexical scope of foo(..). In
fact, as mentioned earlier, this code actually creates variable b inside
of foo(..) that shadows the b that was declared in the outer (global)
scope.
When the console.log(..) call occurs, it finds both a and b in the
scope of foo(..), and never finds the outer b. Thus, we print out “1,
3” instead of “1, 2” as would have normally been the case.


eval(..) when used in a strict-mode program operates in its
own lexical scope, which means declarations made inside of
the eval() do not actually modify the enclosing scope.

eval(..) can
at runtime modify an author-time lexical scope.
 */