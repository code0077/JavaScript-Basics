compose2 = f => g => x => f(g(x))
double = n => n * 2
inc = n => n + 1
console.log(compose2(double)(inc)(3));