const ClassicComponent = React.createClass({
    render () {
        const {props, children} = this;

        return React.createElement('where is my function???', null);
    }
});


const Element = React.createElement;

const FunctionalComponent = (props, children) => { // Remember me???
    return Element('this is what we hope for');
};
