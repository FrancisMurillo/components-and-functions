// Adding an extra argument
const span = (props, children) => {
    return `<span>${(children || []).join('\n')}</span>`;
};

const b = (props, children) => {
    return `<b>${(children || []).join('\n')}</b>`;
};

// Looks DOM-y enough
const spanElement = span(null, [
    span(null, 'My name is '),
    b(null, 'Duck Dogers')
]);
