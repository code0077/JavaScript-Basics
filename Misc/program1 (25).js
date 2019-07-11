/*
    Javascript scope let & const
*/

let u = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(u+y+z);
}
console.log(u);
// console.log(y); // "y is not defined error will be thrown"
console.log(z);

let x1 = 10;
if (true) {
    let y1 = 20;
    var z1 = 30;
    console.log(x1+y1+z1);
}
