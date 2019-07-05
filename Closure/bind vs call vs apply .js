/*
Function.prototype.call()
The method Call invokes the function and allows you to pass in arguments one by one using commas.
Calls a method of an object, substituting another object for the current object.
*/
let customer1 = { name: 'Leo', email: 'leo@gmail.com' };
let customer2 = { name: 'Nat', email: 'nat@hotmail.com' };

function greeting1(text) {
    console.log(`${text} ${this.name}`);
}

greeting1.call(customer1, 'Hello'); // Hello Leo
greeting1.call(customer2, 'Hello'); // Hello Nat


/*
Function.prototype.apply()
Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
*/

let customer11 = { name: 'Leo', email: 'leo@gmail.com' };
let customer22 = { name: 'Nat', email: 'nat@hotmail.com' };
function greeting2(text, text2) {
    console.log(`${text} ${this.name}, ${text2}`);
}
greeting2.apply(customer11, ['Hello', 'How are you?']); // output Hello Leo, How are you?
greeting2.apply(customer22, ['Hello', 'How are you?']); // output Hello Natm How are you?


/*
Function.prototype.bind()
The Bind method returns a new function, allowing you to pass in a this array and any number of arguments.
Use it when you want that function to later be called with a certain context like events.
*/

let customer111 = { name: 'Leo', email: 'leo@gmail.com' };
let customer222 = { name: 'Nat', email: 'nat@hotmail.com' };
function greeting(text) {
    console.log(`${text} ${this.name}`);
}
let helloLeo = greeting.bind(customer111);
let helloNat = greeting.bind(customer222);
helloLeo('Hello'); // Hello Leo
helloNat('Hello'); // Hello Nat

/**
 * Call invokes the function and allows you to pass in arguments one by one.
Apply invokes the function and allows you to pass in arguments as an array.
Bind returns a new function, allowing you to pass in a this array and any number of arguments.


When To Use Each
Call and apply are pretty interchangeable. Just decide whether it’s easier to send in an array or a comma separated list of arguments.

I always remember which one is which by remembering that Call is for comma (separated list) and Apply is for Array.

Bind is a bit different. It returns a new function. Call and Apply execute the current function immediately.
 */