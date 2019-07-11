var my = {};

Object.defineProperty(my, "a", {
    value : 2,
    writable : true,
    configurable : false,
    enumerable : true
});

my.a = 3;
delete my.a; // undefined. deleted.

console.log(my.a);

Object.defineProperty(my, "a", {
    value : 2,
    writable : true,
    configurable : true,
    enumerable : true
});

my.a = 3;
delete my.a; // wont delete
my.a; //3


/*
The final defineProperty(..) call results in a TypeError, regardless
of strict mode, if you attempt to change the descriptor definition of
a nonconfigurable property. Be careful: as you can see, changing con
figurable to false is a one-way action, and cannot be undone!
Another thing configurable:false prevents is the ability to use the
delete operator to remove an existing property:

*/