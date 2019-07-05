(function abc() {
    setTimeout(function () {
        console.log("I waited 1 second!");
    }, 1000);
})();

/**
 * Anonymous function expressions are quick and easy to type, and
many libraries and tools tend to encourage this idiomatic style of code.
However, they have several drawbacks to consider:
1. Anonymous functions have no useful name to display in stack
traces, which can make debugging more difficult.
2. Without a name, if the function needs to refer to itself, for recursion,
etc., the deprecated arguments.callee reference is unfortunately
required. Another example of needing to self-reference is
when an event handler function wants to unbind itself after it fires.
3. Anonymous functions omit a name, which is often helpful in
providing more readable/understandable code. A descriptive
name helps self-document the code in question.
 */

/*The best practice is to always
name your function expressions. */
setTimeout( function timeoutHandler(){ // <-- Look, I have a
// name!
console.log( "I waited 1 second!" );
}, 1000 );