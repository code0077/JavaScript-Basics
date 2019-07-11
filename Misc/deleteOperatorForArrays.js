var array = [1,2,3];

/**
 * When you delete an array element, the array length is not affected. This holds even if you delete the last element of the array.
 */
for (let i = 0 ; i < array.length; i++) {
    delete array[i];
    console.log(array.length);
    console.log(array[i]); // array element still exists.. with undefined value. i.e array[i] = undefined
}

console.log(array);
// The array length is not changed.
for (let i = 0 ; i < array.length; i++) {
    console.log(array[i]);
}

for (let i in array) {
    console.log(i);
}

array[4] = 4;

// Arrays.foreach dosen't iterate undefined elements.
array.forEach((element) => {
    console.log("element")
    console.log(element)
});

Object.keys(array)