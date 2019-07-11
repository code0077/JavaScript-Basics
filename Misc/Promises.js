/** A Promise is an object representing the eventual completion or failure of an asynchronous operation.
 *  Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
 *  Callbacks will never be called before the completion of the current run of the JavaScript event loop.
    Callbacks added with then() even after the success or failure of the asynchronous operation, will be called, as above.
    Multiple callbacks may be added by calling then() several times. 
*   Each callback is executed one after another, in the order in which they were inserted.
    One of the great things about using promises is chaining.
 */
doSomething()
    .then(function (result) {
        console.log(result);
        return doSomethingElse();
    }).catch((error) => {
        console.log(error);
    })
    .then(function (newResult) {
        console.log(newResult);
        return doThirdThing();
    }).catch((error) => {
        console.log(error);
    })
    .then(function (finalResult) {
        console.log(finalResult);
    }).catch((error) => {
        console.log(error);
    })

function doSomething() {
    return Promise.resolve("did something");
}
function doSomethingElse() {
    return Promise.resolve("did something else");
}

function doThirdThing() {
    return Promise.resolve("did third thing");
}