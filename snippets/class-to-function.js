const ClassicComponent = React.createClass({
    render () {
        const {props, children} = this;

        return React.createElement('where is my function???', null);
    }
});

// React,createFactory turns React classes into functions
const BaptisedComponent = React.createFactory(ClassicComponent);

// Now we can treat it as a function
const baptisedElement = BaptisedComponent({yehey: 'Where is React.createElement?'}, null);
