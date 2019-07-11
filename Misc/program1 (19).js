/*
    Javascript higher order functions
*/

/* 
    for each loop 
*/
var arr = [1, 2, 3, 4];

arr.forEach(value => console.log(value));
/*
    Without arrow functions for each loop
*/
arr.forEach(function (value) {
    console.log(value);
});

/*
    filter 
*/

// Array filter to return array with even numbers
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenArray = array.filter(value => value % 2 == 0);
console.log(evenArray);

/*
    Without arrow functions
*/

var oddArray = array.filter(function (value) {
    if (value % 2 == 1) {
        return true;
    }
});
console.log(oddArray);


/*
    Map
*/
var tasks = [
    {
        'name': 'uttej',
        'marks': 100
    },
    {
        'name': 'Manoj',
        'marks': 60
    },
    {
        'name': 'Vamshi',
        'marks': 99
    }
];
// Get names of students who scored marks greater than or equal to 75

var passed = tasks.filter( obj => obj.marks >=75);
var names = passed.map( Names => Names.name);
console.log(names);

// All students names
var allNames = tasks.map( getName => getName.name);
console.log(allNames);

/*
    Above map methods without arrow functions
*/
        
var passedWithoutArrow = tasks.filter(function(obj){
    if (obj.marks >=75) {
        return true;
    }
});
console.log(passedWithoutArrow);
// Similarly other methods can be converted