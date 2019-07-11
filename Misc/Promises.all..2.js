/**
 *  Promise.resolve() and Promise.reject() are shortcuts to manually create an already resolved or rejected promise respectively. This can be useful at times.

*   Promise.all() and Promise.race() are two composition tools for running asynchronous operations in parallel.

*   We can start operations in parallel and wait for them all to finish
 */
Promise.all([doSomething(), doSomethingElse(), doThirdThing()]).then(([res1, res2, res3]) => {
    console.log(res1,res2,res3); // Not executed
}).catch((error) => {
    console.log(error);
});
function doSomething() {
    return new Promise(function(resolve) { 
        setTimeout(function () {
            otherStuff("did something");
        },1000);
    });
}
function doSomethingElse() {
    return new Promise(function(resolve) { 
        setTimeout(function () {
            otherStuff("did something else");
        }, 10);
    });
}

function doThirdThing() {
    return new Promise(function(resolve) { 
        setTimeout(function () {
            otherStuff("did third thing");
        },100);
    });
}

function otherStuff(value) {
    console.log(value);
}