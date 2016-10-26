import React from 'react';

const SayMyName = React.createClass({
    render () {
        const {props} = this;
        const {firstName, lastName} = props; // Getting the data

        return React.createElement('div', {style: {background: 'white'}}, [
            React.createElement('span', {}, 'My name is '),
            React.createElement('b', {}, `${firstName} ${lastName}`)
        ]);
    }
});

const myNameElement = React.createElement(
    SayMyName, // Our component
    {firstName: 'Luan', lastName: 'Loud'}, // Our data
    null // No children
);

module.exports = myNameElement;
