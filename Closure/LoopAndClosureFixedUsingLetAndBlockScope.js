for (var i = 1; i <= 5; i++) {
    let j = i;
    setTimeout(function times() {
        console.log(j);
    }, 1000 * j);
}



for (let i = 1; i <= 5; i++) {
    setTimeout(function times() {
        console.log(i);
    }, 1000 * i);
}
