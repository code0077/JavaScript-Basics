var myObject = { };
Object.defineProperty(
 myObject,
 "a",
 // make `a` enumerable, as normal
 { enumerable: true, value: 2 }
);
Object.defineProperty(
 myObject,
 "b",
 // make `b` NON-enumerable
 { enumerable: false, value: 3 }
);

for (let k in myObject) {
    console.log(k, myObject[k]);
}
console.log(Object.getOwnPropertyNames(myObject));
console.log(Object.keys(myObject));

myObject.propertyIsEnumerable( "a" ); // true
myObject.propertyIsEnumerable( "b" ); // false

/*
Object.keys(..) returns an array of all enumerable properties,
whereas Object.getOwnPropertyNames(..) returns an array of all
properties, enumerable or not.
*/