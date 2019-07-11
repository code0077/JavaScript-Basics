/**
 *  Promise.resolve() and Promise.reject() are shortcuts to manually create an already resolved or rejected promise respectively. This can be useful at times.

*   Promise.all() and Promise.race() are two composition tools for running asynchronous operations in parallel.

*   We can start operations in parallel and wait for them all to finish
 */
Promise.all([doSomething(), doSomethingElse(), doThirdThing()]).then(([res1, res2, res3]) => {
    console.log(res1);
    console.log(res2);
    console.log(res3);
}).catch((error) => {
    console.log(error);
});
function doSomething() {
    return new Promise(function(resolve, reject) { 
        setTimeout(function () {
           return  resolve("did something")
        },1000);
    });
}
function doSomethingElse() {
    return new Promise(function(resolve, reject) { 
        setTimeout(function () {
            return resolve("did something else")
        }, 10);
    });
}

function doThirdThing() {
    return new Promise(function(resolve, reject) { 
        setTimeout(function () {
           return resolve("did third thing")
        },100);
    });
}
