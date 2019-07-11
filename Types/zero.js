var a = 0 / -3; // -0
var b = 0 * -3; // -0

// but the spec insists on lying to you!
a.toString(); // "0"
a + ""; // "0"
String(a); // "0"
// strangely, even JSON gets in on the deception
JSON.stringify(a); // "0"


+"-0"; // -0
Number("-0"); // -0
JSON.parse("-0"); // -0



var a = 0;
var b = 0 / -3;
a == b; // true
-0 == 0; // true
a === b; // true
-0 === 0; // true
0 > -0; // false
a > b; // false
