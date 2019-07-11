var arr = [1,2,3];
var newArr = [-3,-2,-1,0,...arr,4,5];

console.log(newArr); // [ -3, -2, -1, 0, 1, 2, 3, 4, 5 ]


/** elements of array as args to function */

function foo(x,y,z) {
    return x + y + z;
}

var arr = [4,5,6];

console.log(foo(...arr));

var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected