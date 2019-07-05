const addPure = (x, y) => x + y;
console.log(addPure(2, 4)); //6


let x = 2;
const addImpure = (y) => {
  x += y;
  return x;
};
console.log(addImpure(4)); // x === 6 (the first time)
console.log(addImpure(4)); // x === 10 (the second time)
console.log(addImpure(4)); // x === 14 (the third time)

/** Pure Functions = Consistent Results */

/** Impure Functions = Inconsistent Results */

/** “Impurely” Changing an Object */
const impureObjectAssociation = (key, value, object) => {
    object[key] = value;
};

const person = {
    name : 'uttej'
}

const result = impureObjectAssociation('name', 'manoj', person);
console.log({person, result});



const pureAssoc = (key, value, object) => ({
    ...object,
    [key]: value
  });
  const person = {
    name: 'Bobo'
  };
  const result = pureAssoc('shoeSize', 400, person);
  console.log({
    person,
    result
  });