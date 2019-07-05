function correctFoo() {
    console.log(Object.keys(this));
    this.count++;
}
correctFoo.count = 0;

for (var i = 0; i < 10; i++) {
    correctFoo.call(correctFoo);
}
console.log(correctFoo.count);