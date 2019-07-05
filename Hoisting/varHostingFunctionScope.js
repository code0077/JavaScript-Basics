fun();

function fun() {
    console.log(a);
    var a = 2;
}
/**
 * The function foo’s declaration (which in this case includes the implied
value of it as an actual function) is hoisted, such that the call on the
first line is able to execute.
It’s also important to note that hoisting is per-scope. So while our previous
snippets were simplified in that they only included global scope,
the foo(..) function we are now examining itself exhibits that var
a is hoisted to the top of foo(..) (not, obviously, to the top of the
program). So the program can perhaps be more accurately interpreted
like this:
 */

function foo() {
    var a;
    console.log(a); // undefined
    a = 2;
}
foo();