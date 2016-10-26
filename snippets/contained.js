// A Naive Monad
const Maybe = function (value) {
    this.value = value;
};

Maybe.prototype.ret = function () {
    return this.value;
};

Maybe.prototype.bind = function (fn) {
    if (this.value === null) {
        return this.value;
    } else {
        return fn(this.value);
    }
};

// Monadic
const goodGift = new Maybe(500.00),
    badGift = new Maybe(undefined);

const toCurrency = (c) => 'Php' + c + '.00';

goodGift.bind(toCurrency).ret();
badGift.bind(toCurrency).ret();
