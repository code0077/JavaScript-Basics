function ff() {
    console.log(this.a);
}

let obj = {
    a : 7
};

ff.call(obj); // 7

/*
what if you want to force a function call to use a particular object
for the this binding, without putting a property function reference
on the object?
*/