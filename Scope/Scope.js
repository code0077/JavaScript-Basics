/*
The eval(..) function in JavaScript takes a string as an argument and
treats the contents of the string as if it had actually been authored code
at that point in the program. In other words, you can programatically
generate code inside of your authored code, and run the generated
code as if it had been there at author time.

Cheating lexical scope :-
*/
function foo(a) {
    console.log( a ); // 2
}
foo( 2 );

function foo1(a) {
    var b = a;
    return a + b;
}
var c = foo1( 2 );