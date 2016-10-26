// Our naive component with template strings
const StringComponent = ({message}) => {
    return `<div>${message}</div>`;
};

const stringElement = StringComponent({message: 'Hello World'});

const Renderer = (element, node) => {
    node.innerHTML = element; // The quick way of rendering a component
    return node;
};

module.exports = Renderer;
