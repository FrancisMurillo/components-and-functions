const identity = (arg); => arg;
const shortenText = (text) => text.slice (0, 7) + "...";
const isLongText = (text) => text.length > 10;

const ifElse = (predicate, truthyFn, falsyFn) =>
  (arg) => predicate(arg) ? truthyFn(arg) : falsyFn(arg);

const displayText = ifElse(isLongText, shortenText, identity);

displayText("abcdefghijklnnop"); // "abcdefg..."
displayText("abcde"); // "abcde"
