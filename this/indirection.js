function foo() {
    console.log(this.a);
}
var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };
o.foo(); // 3
(p.foo = o.foo)(); // 2
/*
The result value of the assignment expression p.foo = o.foo is a
reference to just the underlying function object. As such, the effective
call-site is just foo(), not p.foo() or o.foo() as you might expect.
Per the rules mentioned earlier, the default binding rule applies.
*/