const renderChildren = (children) => {
    return typeof children === 'string' ? children :
        children ? children.join('\n') :
        '';
};


const StylePropertyMap = {['backgroundColor']: 'background-color'};

const renderStyle = (props) => {
    const styler = (object) => {
        return Object.keys(object).reduce((styleText, key) => {
            const value = object[key];
            const cssKey = StylePropertyMap[key] || key;

            return `${styleText};${cssKey.toString()}: ${value.toString()};`;
        }, '');
    };

    if (!props) {
        return '';
    } else {
        const {style} = props;
        return typeof style === 'object' ?
            styler(style) :
            '';
    }
};

const div = (props, children) => {
    return `<div style=\"${renderStyle(props)}\">${renderChildren(children)}</div>`;
};

const span = (props, children) => {
    return `<span style=\"${renderStyle(props)}\">${renderChildren(children)}</span>`;
};

const b = (props, children) => {
    return `<b style=\"${renderStyle(props)}\">${renderChildren(children)}</b>`;
};

const ul = (props, children) => {
    return `<ul style=\"${renderStyle(props)}\">${renderChildren(children)}</ul>`;
};

const li = (props, children) => {
    return `<li style=\"${renderStyle(props)}\">${renderChildren(children)}</li>`;
};


module.exports = {
    span,
    b,
    div,
    ul,
    li
};
