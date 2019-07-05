const aTail = (head, ...tail) => tail;
console.log(aTail(1, 2, 3)); // [2, 3]

/** Rest operation */
const shiftToLast = (head, ...tail) => [...tail, head];
console.log(shiftToLast(1, 2, 3)); // [2, 3, 1]