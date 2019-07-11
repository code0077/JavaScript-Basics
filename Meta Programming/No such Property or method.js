var obj = { 
    a : 1,
    foo() {
        console.log("Happy");
    }
};
var handlers = {
    get: function(obj, prop) {
        if (prop in obj) {
            return obj[prop];
        } else {
            throw "Property not found or no such method!!!";
        }
    }
};
var p = new Proxy(obj, handlers);
console.log(Object.keys(p))
p.a;
p.bar(); // property not found or no such method!!!