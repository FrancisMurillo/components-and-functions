const xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map, Filter and Reduce
xs.map((n) => n + 1)
    .filter((n) => n % 2 === 0)
    .reduce((x, y) => x + y, 0);


// Composition
const R = require('ramda');

const incrementAndSquare = R.compose(
    (n) => n * n,
    (n) => n + 1
);

R.map(incrementAndSquare, xs);


// Partial
const parseInteger = R.partialRight(parseInt, [10]);

parseInteger('10');
