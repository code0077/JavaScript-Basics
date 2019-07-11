var my = {};

Object.defineProperty(my, "a", {
    value : 2,
    writable : false,
    configurable : true,
    enumerable : true
});

my.a = 3;

console.log(my.a);

/*
As you can see, our modification of the value silently failed. If we try
in strict mode, we get an error:
*/