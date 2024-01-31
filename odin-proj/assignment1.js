
function fibss(n) {
    if (n == 0) {
        return ('the number zero');
    } else {
        return fibss(n - 1) + fibss(n - 2);
    }

}

function fibs(n) {
    let fib = 0;
    for (let i = 1; i <= n; (i -1 )+ (i-2)) {
        fib += i;
    }
    return fib;
}