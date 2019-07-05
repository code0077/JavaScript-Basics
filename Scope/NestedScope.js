function foo(a) {
    console.log(a + b);
}
var b = 2;
foo(2); // 4


function foo1(a) {
    var b = a * 2;
    function bar(c) {
        console.log(a, b, c);
    }
    bar(b * 3);
}
foo1(2); // 2, 4, 12