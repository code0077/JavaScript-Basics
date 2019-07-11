/*
    Life of objects javascript
*/

// Prototypes using Object.create

let protoTypeObject = {
    print (line) {
        console.log(`The student name is ${this.name} and roll no is ${this.rollNo}`)
    }
}

let callPrototype = Object.create(protoTypeObject)
callPrototype.name = "Manoj"
callPrototype.rollNo = "69"
callPrototype.print("Hello world")
console.log(Object.getPrototypeOf(callPrototype))

let dupPrototype = protoTypeObject
dupPrototype.name = "uttej"
dupPrototype.rollNo = "82"
dupPrototype.print("Hi")