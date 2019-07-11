var anotherObject = {
    cool: function () {
        console.log("cool!");
    }
};
var myObject = Object.create(anotherObject);
myObject.doCool = function () {
    this.cool(); // internal delegation!
};
myObject.doCool(); // "cool!"

/*
Here, we call myObject.doCool(), which is a method that actually
exists on myObject, making our API design more explicit (less “mag‐
ical”). Internally, our implementation follows the delegation design
pattern (see Chapter 6), taking advantage of [[Prototype]] delega‐
tion to anotherObject.cool().
In other words, delegation will tend to be less surprising/confusing if
it’s an internal implementation detail rather than plainly exposed in
your API interface design. We will expound on delegation in great
detail in the next chapter.
*/

/* Best way */

var anotherObject = {
    cool: function () {
        console.log("cool!");
    }
};
var myObject = Object.create(anotherObject);
myObject.cool(); // "cool!"