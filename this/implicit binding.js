function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo
};
obj.foo(); // 2

/*
call-site uses the obj context to reference the function,
so you could say that the obj object “owns” or “contains” the function
reference at the time the function is called.
*/