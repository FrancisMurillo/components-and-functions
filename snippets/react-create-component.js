import React from 'react';

const Component = React.createClass({
    render () {
        const {props} = this; // Just to show this

        return React.createElement(
            'p', // The tag name
            {style: {background: 'yellow', fontSize: '2em'}}, // The attributes
            'Hello ReactJS!' // The child (which is string for now)
        );
    }
});

export default Component;
