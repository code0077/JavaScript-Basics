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

var pets = {
  names: ['Baron', 'Chief', 'Axel'],
  owner: 'Jason',
  description: function(){
    return this.names.map(function(pet){
      return `${this.owner} knows an awesome dog named ${pet}.`
    });
  }
};
console.log(pets.description());

var pets = {
  names: ['Baron', 'Chief', 'Axel'],
  owner: 'Jason',
  description: function(){
    return this.names.map((pet) =>{
      return `${this.owner} knows an awesome dog named ${pet}.`
    });
  }
};
console.log(pets.description());

