
var handlers = {
    getOwnPropertyDescriptor(target, prop) {
        console.log(
            "getOwnPropertyDescriptor"
        );
        return Object.getOwnPropertyDescriptor(
            target, prop
        );
    },
    defineProperty(target, prop, desc) {
        console.log("defineProperty");
        return Object.defineProperty(
            target, prop, desc
        );
    }
};
var proxy = new Proxy({}, handlers);
console.log(proxy)
proxy.a = 2;




var handler = {
    get: function (obj, prop) {
        return prop in obj ?
            obj[prop] :
            37;
    },
    set: function (obj, prop, value) {
        if (value === null || value === undefined) {
            console.log("exception!!!");
            throw new Error("Exception!!!")
            return;
        }
        obj[prop] = value;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined; // exception!!!

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37

/*
The Proxy object is used to define custom behavior for fundamental operations 
(e.g. property lookup, assignment, enumeration, function invocation, etc).
*/