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
    return Promise.resolve("hero");
}
function doSomethingElse() {
    return Promise.resolve("hero");
}

function doThirdThing() {
    return Promise.resolve("hero");
}

function otherStuff(value) {
    console.log(value);
}