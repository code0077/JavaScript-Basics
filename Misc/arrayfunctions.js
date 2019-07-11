function even(v) {
    return v % 2 === 0;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.some(even)); //true
console.log(arr.every(even)); //every

/** 
 * Array.prototype.reduce()
 * Docs:-
 * reduce() executes the callback function once for each element present in the array, excluding holes in the array, receiving four arguments:

accumulator
currentValue
currentIndex
array
The first time the callback is called, accumulator and currentValue can be one of two values. If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue, and currentValue will be equal to the first value in the array. If no initialValue is provided, then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.

Note: If initialValue isn't provided, reduce() will execute the callback function starting at index 1, skipping the first index. If initialValue is provided, it will start at index 0.

If the array is empty and no initialValue is provided, TypeError will be thrown. If the array has only one element (regardless of position) and no initialValue is provided, or if initialValue is provided but the array is empty, the solo value will be returned without calling callback.
 */
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let v = array.reduce(reducer);
console.log(v); // 55

function reducer(accumulator, currentValue) {
    return accumulator + currentValue;
}

// reduce with argument (initial value).
let v1 = array.reduce(reducer, 10);
reducer1: (accumulator, currentValue) => accumulator + currentValue;
console.log(v1); // 55 + 10 


// Reduced code.

var total = [1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(total); // 6

/* 
Dealing with objects.
To sum up values contained in an array of objects you must supply an initial value so that each item passes through your function.

*/
const sum = [{ x: 1 }, { x: 2 }, { x: 3 }];
var total = sum.reduce((accumulator, currentValue) => accumulator.x + currentValue.x);
console.log(total); // NaN.

const sum1 = [{ x: 1 }, { x: 2 }, { x: 3 }];
var total = sum.reduce((accumulator, currentValue) => accumulator + currentValue.x, 0);
console.log(total); // 6

