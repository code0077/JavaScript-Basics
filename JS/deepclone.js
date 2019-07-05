const person = {
  name: 'Bobo',
  address: { street: 'Main Street', number: 123 }
}
const deepPersonClone = JSON.parse(JSON.stringify(person));
deepPersonClone.address.number = 456;
console.log({ person, deepPersonClone });