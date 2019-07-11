/*
• null is an empty value.
• undefined is a missing value.
. null special keyword. not identifier.
. undefined is an identifier.
*/

function foo() {
    undefined = 2; // really bad idea!
}
foo();
function foo() {
    "use strict";
    undefined = 2; // TypeError!
}


function foo() {
    "use strict";
    var undefined = 2;
    console.log(undefined); // 2
}
foo();

/*
In both non-strict mode and strict mode, however, you can cre‐
ate a local variable of the name undefined. But again, this is a terri‐
ble idea!
*/
