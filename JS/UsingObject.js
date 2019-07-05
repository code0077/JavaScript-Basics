var myObj = new Object();
var person1 = new Object({
    name: 'Chris',
    age: 38,
    greeting: function() {
      console.log('Hi! I\'m ' + this.name + '.');
    }
  });

console.log(person1.name);
person1.greeting();

var obj = new Object({
    name: 'manoj',
    getName: ()  =>  { console.log(this.name)},
    getNameWithoutArrow : function () { console.log(this.name)}
});
obj.getName();
obj.getNameWithoutArrow();