/*
Object constant
By combining writable:false and configurable:false, you can
essentially create a constant (cannot be changed, redefined, or deleted)
as an object property, like:
*/

var myObject = {};
Object.defineProperty(myObject, "FAVORITE_NUMBER", {
    value: 42,
    writable: false,
    configurable: false
});

/*
Prevent extensions
If you want to prevent an object from having new properties added to
it, but otherwise leave the rest of the object’s properties alone, call
Object.preventExtensions(..):
*/
var myObject = {
    a: 2
};
Object.preventExtensions(myObject);
myObject.b = 3;
myObject.b; // undefined

/*
Seal
Object.seal(..) creates a “sealed” object, which means it takes an
existing object and essentially calls Object.preventExtensions(..)
on it, but also marks all its existing properties as configurable:false.
So, not only can you not add any more properties, but you also cannot
reconfigure or delete any existing properties (though you can still
modify their values).
*/

/*
Freeze
Object.freeze(..) creates a frozen object, which means it takes an
existing object and essentially calls Object.seal(..) on it, but it also
marks all “data accessor” properties as writable:false, so that their
values cannot be changed.

This approach is the highest level of immutability that you can attain
for an object itself, as it prevents any changes to the object or to any
of its direct properties (though, as mentioned earlier, the contents of
any referenced other objects are unaffected).
*/