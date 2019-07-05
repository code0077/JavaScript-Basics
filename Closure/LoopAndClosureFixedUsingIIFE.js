for (var i = 1; i <= 5; i++) {
    (function timer() {
        var j = i;
        setTimeout(function times() {
            console.log(j);
        }, 1000 * j);
    })();
}



for (var i = 1; i <= 5; i++) {
    (function timer(i) {
        setTimeout(function times() {
            console.log(i);
        }, 1000 * i);
    })(i);
}
