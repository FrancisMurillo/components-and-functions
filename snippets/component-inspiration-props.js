const span = (props) => {
    const {children} = props; // Getting the children
    return `<span>${(children || []).join('\n')}</span>`;
};

const b = (props) => {
    const {children} = props; // Getting the children again
    return `<b>${(children || []).join('\n')}</b>`;
};

const spanElement = span({
    children: [
        span({children: 'My name is '}),
        b({children: 'Duck Dodgers'})
    ]
});
