const compose = (f, g) => {
    return function (...args) {
        return g(f(...args));
    };
};

const increment = (n) => { return n + 1; };

const decrement = (n) => { return n - 1; };

const identity = compose(decrement, increment);

const blackbird = compose(compose, compose);
