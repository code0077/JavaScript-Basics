var a = [ 1, "2", [3] ];
a.length; // 3
a[0] === 1; // true
a[2][0] === 3; // true


var arr = [1, 2, 3];
delete arr[0];
console.log(arr.length);
console.log("============== =================");
arr.forEach((e) => console.log(e))
console.log("============== =================");
for (var v of arr) {
    console.log(v)
}

/*
Using delete on an array value will remove
that slot from the array, but even if you remove
the final element, it does not update the length
property, so be careful! 
*/

var obj = {
    a : 8,
    b : 9,
    c : 10
}
delete obj.c;
console.log(Object.keys(obj))
for (var v in obj) {
    console.log(v)
}


var a = [ ];
a[0] = 1;
// no `a[1]` slot set here
a[2] = [ 3 ];
a[1]; // undefined
a.length; // 3

/*
arrays are numerically indexed (as you’d expect), but the tricky
thing is that they also are objects that can have string keys/proper‐
ties added to them (but which don’t count toward the length of the
array):
*/

var a = [ ];
a[0] = 1;
a["foobar"] = 2;
a.length; // 1
a["foobar"]; // 2
a.foobar; // 2


/*
However, a gotcha to be aware of is that if a string value intended
as a key can be coerced to a standard base-10 number, then it is
assumed that you wanted to use it as a number index rather than as a
string key
*/

var a = [ ];
a["13"] = 42;
a.length; // 14
