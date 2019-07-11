function c() {

}
var cc = new c();
console.log(Object.getPrototypeOf(cc) === c.prototype);
/*
When a is created by calling new Foo(), one of the things that happens
(see Chapter 2 for all four steps) is that a gets an internal [[Proto
type]] link to the object that Foo.prototype is pointing at.
Stop for a moment and ponder the implications of that statement.
In class-oriented languages, multiple copies (aka instances) of a class
can be made, like stamping something out from a mold. As we saw in
Chapter 4, this happens because the process of instantiating (or in‐
heriting from) a class means, “copy the behavior plan from that class
into a physical object,” and this is done again for each new instance.
But in JavaScript, there are no such copy actions performed. You don’t
create multiple instances of a class. You can create multiple objects that
are [[Prototype]]-linked to a common object. But by default, no
copying occurs, and thus these objects don’t end up totally separate
and disconnected from each other, but rather, quite linked.
new Foo() results in a new object (we called it a), and that new object
a is internally [[Prototype]]-linked to the Foo.prototype object.
We end up with two objects, linked to each other. That’s it. We didn’t
instantiate a class. We certainly didn’t do any copying of behavior from
a “class” into a concrete object. We just caused two objects to be linked
to each other.
In fact, the secret, which eludes most JS developers, is that the new
Foo() function calling had really almost nothing direct to do with the
process of creating the link. It was sort of an accidental side effect. new
Foo() is an indirect, roundabout way to end up with what we want: a
new object linked to another object.

*/