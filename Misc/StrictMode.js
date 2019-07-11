/*
    Usage of strict mode javascript
*/
"use strict";
for (let counter = 0; counter < 10; counter++) {
    console.log(counter)
}
function strictMethod() {
    for (counter = 0; counter < 10; counter++) {
        console.log(counter)
    }
}
strictMethod()
