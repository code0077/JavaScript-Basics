/**
 * Both function declarations and variable declarations are hoisted. But
a subtle detail (that can show up in code with multiple “duplicate”
declarations) is that functions are hoisted first, and then variables.
 */
foo();
var foo;
function foo() {
    console.log(1);
}
foo = function () {
    console.log(2);
}

// 1 is printed instead of 2! This snippet is interpreted by the Engine as:

function foo() {
    console.log(1);
}

foo();

foo = function () {
    console.log(2);
}

/*
Notice that var foo was the duplicate (and thus ignored) declaration,
even though it came before the function foo()… declaration, because
function declarations are hoisted before normal variables.
While multiple/duplicate var declarations are effectively ignored,
subsequent function declarations do override previous ones.
*/

/*
While multiple/duplicate var declarations are effectively ignored,
subsequent function declarations do override previous ones.
*/

foo(); // 3
function foo() {
    console.log(1);
}
var foo = function () {
    console.log(2);
};
function foo() {
    console.log(3);
}

/**
 * While this all may sound like nothing more than interesting academic
trivia, it highlights the fact that duplicate definitions in the same scope
are a really bad idea and will often lead to confusing results.
 */