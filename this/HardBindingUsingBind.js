function f11() {
    console.log(this.a);
}


var obj = {
    a: 10
};

var  a = 100;

f11(); // 100 ==> implicit binding lost. goes to default binding.

var fBind = f11.bind(obj); // hard binding.

fBind(); // 10