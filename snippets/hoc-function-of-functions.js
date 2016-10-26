const defaultText = (text) => text || '';
const toUpperCase = (text) => text.toUpperCase();

const mapArg = (argMapper, f) => (arg) => f(argMapper(arg));

const safeToUpperCase = mapArg(defaultText, toUpperCase);

safeToUpperCase('abc'); // "ABC"
safeToUpperCase(null); // ""
