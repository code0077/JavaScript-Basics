function myConcat(separator) {
    var result = ''; // initialize list
    var i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
       result += arguments[i] + separator;
    }
    return result;
 }

 // returns "red, orange, blue, "
var res = myConcat(', ', 'red', 'orange', 'blue');
console.log(res);

// returns "elephant; giraffe; lion; cheetah; "
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// returns "sage. basil. oregano. pepper. parsley. "
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');