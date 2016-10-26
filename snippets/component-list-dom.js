const renderChildren = (children) => {
    return typeof children === 'string' ? children :
        children ? children.join('\n') :
        '';
};

const div = (props, children) => {
    return `<div>${renderChildren(children)}</div>`;
};

const ul = (props, children) => {
    return `<ul>${renderChildren(children)}</ul>`;
};

const li = (props, children) => {
    return `<li>${renderChildren(children)}</li>`;
};
