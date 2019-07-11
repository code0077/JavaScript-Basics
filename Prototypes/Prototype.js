var objects = {
    a : 2
};

var anotherObject = Object.create(objects)
console.log(anotherObject.a);
console.log(anotherObject.toString()); // Not available in objects. available in Object.


/*
So, we have myObject that is now [[Prototype]] linked to another
Object. Clearly myObject.a doesn’t actually exist, but nevertheless,
the property access succeeds (being found on anotherObject instead)
and indeed finds the value 2.
But, if a weren’t found on anotherObject either, its [[Prototype]]
chain, if nonempty, is again consulted and followed.
This process continues until either a matching property name is found,
or the [[Prototype]] chain ends. If no matching property is ever
found by the end of the chain, the return result from the [[Get]]
operation is undefined
*/
