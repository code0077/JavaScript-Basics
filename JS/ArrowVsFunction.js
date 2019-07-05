var obj = new Object({
    name: 'manoj',
    getName: ()  =>  { console.log(this.name)},
    getNameWithoutArrow : function () { console.log(this.name)}
});
obj.getName(); // Undefined
obj.getNameWithoutArrow(); // manoj


let obj1 = {
    myVar: 'foo',
    
    myFunc: function() { 
      console.log(this.myVar)   // foo
   
      setTimeout(function() {
        console.log(this.myVar) // undefined
      }, 1)
    }
  }

obj1.myFunc();

let obj2 = {
    myVar: 'foo',
    
    myFunc: function() { 
      console.log(this.myVar)   // foo
   
      setTimeout(() => {
        console.log(this.myVar, "Using arrow")}, 1000)} // foo
}
obj2.myFunc();


let object = {
  name : "Anirudh",
  myFunc : function () {
    console.log("Hurray");
  }
};

console.log(object.myFunc)