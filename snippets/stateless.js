const factorial = (n) => { // Look Ma, no state!
    const recurser = (n, acc) => {
        return (n <= 1) ? acc : recurser(n - 1, acc * n);
    };

    return recurser(n, 1);
};
