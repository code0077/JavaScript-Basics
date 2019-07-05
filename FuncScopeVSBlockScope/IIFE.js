var a = 2;
(function foo() {
    var a = 3;
    console.log(a); // 3
});
console.log(a); // 2

/**
 * Now that we have a function as an expression by virtue of wrapping
it in a ( ) pair, we can execute that function by adding another () on
the end, like (function foo(){ .. })(). The first enclosing ( ) pair
makes the function an expression, and the second () executes the
function.
30
 */

var a = 5;
(function foo() {
    var a = 3;
    console.log(a); // 3
})();
console.log(a); // 2


/* Another application of this pattern addresses the (minor niche) concern
that the default undefined identifier might have its value incorrectly
overwritten, causing unexpected results. By naming a parameter
undefined, but not passing any value for that argument, we can guarantee
that the undefined identifier is in fact the undefined value in a
block of code */
undefined = true; // setting a land-mine for other code! avoid!
(function IIFE( undefined ){
var a;
if (a === undefined) {
console.log( "Undefined is safe here!" );
}
})();


var aa = 2;
(function IIFE( def ){
def( window );
})(function def( global ){
var aa = 3;
console.log( aa ); // 3
console.log( global.aa ); // 2
});

/*
Still another variation of the IIFE inverts the order of things, where
the function to execute is given second, after the invocation and parameters
to pass to it. This pattern is used in the UMD (Universal
Module Definition) project. Some people find it a little cleaner to understand,
though it is slightly more verbose.
*7/