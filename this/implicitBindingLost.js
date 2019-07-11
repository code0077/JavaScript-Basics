function f() {
    console.log(this.a);
}

var a = 6;

var fObj = {
    a : 7,
    ff : f
}

fObj.ff(); // 7

// Above code is implicit binding..

// Lost implicit binding

function f1() {
    console.log(this.a);
}

var fObj1 = {
    a : 8,
    ff : f1
};

var a = 99;

var callF1 = fObj1.ff;
callF1(); // Undefined. ==> That code is default binding!!!.
fObj.ff(); // 7.

/*
 the call-site is what
matters, and the call-site is callF1(), which is a plain, undecorated call,
and thus the default binding applies.
*/