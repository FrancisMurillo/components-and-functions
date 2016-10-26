const add = (x, y) => {
    return x + y;
};

const specialAdd = (x, y) => {
    // I didn't ask for this.
    console.log('Nuclear missles fired');
    const result = x + y,
      fallout = 10000 + x * y * Math.random();

    console.log(fallout + ' people showered in green glow.');

    return result;
};
