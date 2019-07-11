function* fib() {
    let a = 0;
    let b = 0;
    let c = 1;
    while (c <= 1000) {
        a = b;
        b = c;
        c =  a + b;
        yield c;
    }
}
let get = fib();
while (true) {
    let obj = get.next();
    if (!obj.done) {
        console.log(obj.value);
    } else {
        break;
    }
}