var a = 42;
var b = a + ""; // implicit coercion
var c = String( a ); // explicit coercion

console.log("false" == false);
console.log(false == "false")

console.log(0 == "false")
console.log(0 == false)
console.log(null == undefined)
console.log(null === undefined)