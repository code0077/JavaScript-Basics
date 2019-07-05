function foo(num) {
    console.log("foo: " + num);
    this.count++;
}
foo.count = 0;

var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}
console.log(foo.count); // 0 



function fooss(num) {
    console.log("foo: " + num);
    data.count++;
}
var data = {
    count: 0
};
var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        fooss(i);
    }
}
console.log(data.count); // 4




function betterFoo(num) {
    console.log("foo: " + num);
    betterFoo.count++;
}
betterFoo.count = 0;
var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        betterFoo(i);
    }
}
// how many times was `foo` called?
console.log(betterFoo.count); // 4


