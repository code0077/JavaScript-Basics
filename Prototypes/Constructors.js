function Foo() {
    // ...
}
Foo.prototype.constructor === Foo; // true
var a = new Foo();
a.constructor === Foo; // true

/*
The Foo.prototype object by default (at declaration-time on line 1 of
the snippet!) gets a public, nonenumerable (see Chapter 3) property
called .constructor, and this property is a reference back to the func‐
tion (Foo in this case) that the object is associated with

In reality, Foo is no more a “constructor” than any other function in
your program. Functions themselves are not constructors. However,
when you put the new keyword in front of a normal function call, that
makes that function call a “constructor call.” In fact, new sort of hijacks
any normal function and calls it in a fashion that constructs an object,
in addition to whatever else it was going to do.

In other words, in JavaScript, it’s most appropriate to say that a “con‐
structor” is any function called with the new keyword in front of it.
Functions aren’t constructors, but function calls are “constructor calls”
if and only if new is used.


the .constructor
reference is also delegated up to Foo.prototype, which happens to, by
default, have a .constructor that points at Foo
*/

function Foo1() { /* .. */ }
Foo1.prototype = { /* .. */ }; // create a new prototype object
var a1 = new Foo1();
a1.constructor === Foo1; // false!
a1.constructor === Object; // true!

/*
Object(..) didn’t “construct” a1, did it? It sure seems like Foo()
“constructed” it. Most developers think of Foo() as doing the
construction, but where everything falls apart is when you think “con‐
structor” means “was constructed by,” because by that reasoning,
a1.constructor should be Foo, but it isn’t!
What’s happening? a1 has no .constructor property, so it delegates
up the [[Prototype]] chain to Foo.prototype. But that object doesn’t
have a .constructor either (like the default Foo.prototype object
would have had!), so it keeps delegating, this time up to Object.pro
totype, the top of the delegation chain. That object indeed has
a .constructor on it, which points to the built-in Object(..)
function
*/