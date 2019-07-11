function foo() {
    this.bar = 10;
}

foo.prototype.bar = 15;

var f = new foo();
console.log(f.bar); // 10

delete f.bar;

console.log(f.bar) // 15

delete foo.prototype.bar;

console.log(f.bar); // undefined