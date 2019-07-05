function foo() {
    function bar() {
        console.log(6);
    }
    baz(bar);

}

function baz(bazz) {
    console.log("I am a closure")
    bazz();
} 
foo();

function wait(message) {
    setTimeout(function timer() {
        console.log(message);
    }, 1000);
}
wait("Hello, closure!");