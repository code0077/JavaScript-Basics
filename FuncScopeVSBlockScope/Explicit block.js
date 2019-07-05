var foo = true;
if (foo) {
    { // <-- explicit block
        var bar = foo * 2;
        console.log(bar);
    }
}
console.log(bar); // 2


var fooo = true;
if (fooo) {
    { // <-- explicit block
        let bars = fooo * 2;
        console.log(bars);
    }
}
// console.log(bars); // ReferenceError

/**
 * Creating explicit blocks for block-scoping can address some of these
concerns, making it more obvious where variables are attached and
not. Usually, explicit code is preferable over implicit or subtle code.
This explicit block-scoping style is easy to achieve and fits more naturally
with how block-scoping works in other languages
 */
{
    console.log(b); // ReferenceError!
    let b = 2;
}

function process(data) {
    // do something interesting
}
// anything declared inside this block can go away after!
{
    let someReallyBigData = {};
    process(someReallyBigData);
}
var btn = document.getElementById("my_button");
btn.addEventListener("click", function click(evt) {
    console.log("button clicked");
}, /*capturingPhase=*/false);
