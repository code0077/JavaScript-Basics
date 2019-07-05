for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i + " --- ");
    }, i * 1000);
}


for (var i = 1; i <= 5; i++) {
    (function () {
        setTimeout(function timer() {
            console.log(i + " === ");
        }, i * 1000);
    })();
}

// Both print 6 6 times.