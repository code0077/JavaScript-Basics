function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope
    console.log("baz");
    bar(); // <-- call-site for `bar`
}
function bar() {// call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`
    console.log("bar");
    foo(); // <-- call-site for `foo`
}
function foo() {
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`
    console.log("foo");
}
baz(); // <-- call-site for `baz`

/*
the call-stack (the stack of functions
that have been called to get us to the current moment in execution).
The call-site we care about is in the invocation before the currently
executing function.
*/