function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

alert(sumTo(100));

function recursiveSumTo(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * recursiveSumTo(n - 1)
    }
}
recursiveSumTo(3)

function factorial(n) {
    let fact = 0;
    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    return fact
}

alert(factorial(4))

function factorialRecursive(n) {
    if (n == 1) {
        return 1
    } else {
        return n * factorialRecursive(n - 1)
    }
}


//fibonacci numbers
function fib(n) {
    if (n == 0) {
        return ('the number zero');
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

//lnked list
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {

    print(list.value); // output the current item

    if (list.next) {
        printList(list.next); // do the same for the rest of the list
    }

}

printList(list);
//reversed list
function printList(list) {


    if (list.next) {
        printList(list.next); // do the same for the rest of the list
    }
    print(list.value); // output the current item

}

printList(list);


var six = productOfArray([1, 2, 3]) // 6
function productOfArray([a]) {
    if (a.length === 0)
        return "array not long enough"
    else{
        return a.shift() * productOfArray(a);
    }
}


