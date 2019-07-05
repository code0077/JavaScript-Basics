function doSomething(a) {
    function doSomethingElse(a) {
        return a - 1;
    }
    var b;
    b = a + doSomethingElse(a * 2);
    console.log(b * 3);
}
doSomething(2); // 15


/***
 * Now, b and doSomethingElse(..) are not accessible to any outside
influence, instead controlled only by doSomething(..). The functionality
and end result has not been affected, but the design keeps
private details private, which is usually considered better software.
 */