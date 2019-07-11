function User() {
    this.name = "",
    this.rollNo = "",
    this.subject = {
        marks : null,
        subName : null
    }
}

var obj = new User();
obj.name = "hero";
obj.rollNo = "007";
obj.subject.marks = 55;
obj.subject.subName = "maths"


/** Objects created with new keyword don't have prototype object.. 
    obj.prototype.greet = () => console.log("hello"); //Undefined
**/

var objAssign = Object.assign({}, obj);

console.log(objAssign.name, objAssign.rollNo, objAssign.subject);


obj.name = "hello";
obj.rollNo = "009";
obj.subject.marks = 66;
obj.subject.subName = "science";

console.log(objAssign.name, objAssign.rollNo, objAssign.subject); // Changing obj object changes objAssign object!!! Shallow copy