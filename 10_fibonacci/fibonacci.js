const fibonacci = function(fib) {
    fib = + fib;
    if (fib < 0) return "OOPS";
    else if (fib <= 1) return fib;
    else return fibonacci(fib-1) + fibonacci(fib-2);
};

// Do not edit below this line
module.exports = fibonacci;
