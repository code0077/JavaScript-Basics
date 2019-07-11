function fff() {
    console.log(this.a);
}

let obj = {
    a : 8
};

var helper = function () {
    fff.call(obj);
}

helper();

setTimeout(helper, 1000);

/*
 No matter how you later invoke
the function helper, it will always manually invoke fff with obj. This
binding is both explicit and strong, so we call it hard binding.

*/