function foo() {
    // return an arrow function
    return (a) => {
        // `this` here is lexically inherited from `foo()`
        console.log(this.a);
    };
}
var obj1 = {
    a: 2
};
var obj2 = {
    a: 3
};
var bar = foo.call(obj1);
bar.call(obj2); // 2, not 3!
   /*
   The arrow-function created in foo() lexically captures whatever
   foo()s this is at its call-time. Since foo() was this-bound to obj1,
   bar (a reference to the returned arrow-function) will also be thisbound to obj1. The lexical binding of an arrow-function cannot be
   overridden (even with new!)   
   */