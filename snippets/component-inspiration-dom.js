const renderChildren = (children) => {
    return typeof children === 'string' ? children :
        children ? children.join('\n') :
        '';
};

const span = (props, children) => {
    return `<span>${renderChildren(children)}</span>`;
};

const b = (props, children) => {
    return `<b>${renderChildren(children)}</b>`;
};

module.exports = {
    span,
    b
};
