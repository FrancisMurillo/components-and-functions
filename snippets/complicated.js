// Y Combinator
const y = function (rec) {
    return function (f) {
        return f(f);
    }(function (f) {
        return rec(
            function (x) { return (f(f))(x); }
        );
    });
};

// Factorial - Recursively
const fixedFactorial = function (rec) {
    return function (n) {
        if (n < 2) {
            return 1;
        } else {
            return n * rec(n - 1);
        }
    };
};

const factorial = y(fixedFactorial);

factorial(10);
