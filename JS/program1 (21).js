/*
    Null and undefined javascript

    In JavaScript, undefined means a variable has been declared but has not yet been 
    assigned a value, such as:
*/

var value;
console.log(typeof value);

var nullValue = null;
console.log(typeof nullValue);


/*
From the preceding examples, it is clear that undefined and null are two distinct types: 
undefined is a type itself (undefined) while null is an object.
*/

// Important

console.log(null === null);
console.log(null == null);

console.log(undefined === undefined);
console.log(undefined === undefined);

console.log(null == undefined);
console.log(null === undefined);

var undefined = 'value';
console.log(undefined); // It is a type itself ( undefined )

console.log(null == undefined);
console.log(null === undefined);
