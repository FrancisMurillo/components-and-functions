const renderStyle = ({style}) => {
    const styler = (object) => {
        return Object.keys(object).reduce((styleText, key) => {
            const value = object[key];

            return `${styleText};${key.toString()}: ${value.toString()};`;
        }, '');
    };

    return typeof style === 'object' ?
        styler(style) :
        '';
};

const div = (props, children) => {
    return `<div style=\"${renderStyle(props)}\">${renderChildren(children)}</div>`;
};
