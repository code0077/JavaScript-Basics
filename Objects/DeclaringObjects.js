var a = {
    b: 9,
    // ....
}

var aa = new Object();
aa.b = 10;

/*
The constructed form and the literal form result in exactly the same
sort of object. The only difference really is that you can add one or
more key/value pairs to the literal declaration, whereas with
constructed-form objects, you must add the properties one by one.
*/

/*
Objects are the general building block upon which much of JS is built.
They are one of the six primary types (called “language types” in the
specification) in JS:
• string
• number
• boolean
• null
• undefined
• object
Note that the simple primitives (string, boolean, number, null, and
undefined) are not themselves objects. null is sometimes referred
to as an object type, but this misconception stems from a bug in the
language that causes typeof null to return the string "object" in‐
correctly (and confusingly). In fact, null is its own primitive type.
It’s a common misstatement that “everything in JavaScript is an object.”
This is clearly not true.
By contrast, there are a few special object subtypes, which we can refer
to as complex primitives.
function is a subtype of object (technically, a “callable object”). Func‐
tions in JS are said to be “first class” in that they are basically just
normal objects (with callable behavior semantics bolted on), and so
they can be handled like any other plain object.

*/