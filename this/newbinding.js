function bar(a) {
    this.a = a;
}

var obj = new bar(5);
// console.log(a); error!!!
console.log(obj.a);

/**
 * By calling foo(..) with new in front of it, we’ve constructed a new
object and set that new object as the this for the call of foo(..). So
new is the final way that a function call’s this can be bound. We’ll call
this new binding.

In JS, con‐
structors are just functions that happen to be called with the new op‐
erator in front of them. They are not attached to classes, nor are they
instantiating a class. They are not even special types of functions.
They’re just regular functions that are, in essence, hijacked by the use
of new in their invocation.

When a function is invoked with new in front of it, otherwise known
as a constructor call, the following things are done automatically:
1. A brand new object is created (aka constructed) out of thin air.
2. The newly constructed object is [[Prototype]]-linked.
3. The newly constructed object is set as the this binding for that
function call.

4. Unless the function returns its own alternate object, the newinvoked function call will automatically return the newly con‐
structed object.
 */