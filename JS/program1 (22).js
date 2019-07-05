/*
    Javascript objects
*/

let myObj = {
    squirrel : false,
    events: ["work", "touched tree", "pizza", "running"]
}
console.log(myObj.squirrel);
console.log(myObj.dog);
myObj.dog = false;
console.log(myObj);
if ( "dog" in myObj) { // Checks if property exists in object
    console.log(true);
}
if ( "pizza" in myObj) {
    console.log(true);
}
if ( myObj.events.indexOf("pizza") ) {
    console.log(true);
}

var keys = Object.keys(myObj);
console.log(keys);