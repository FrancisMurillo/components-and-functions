const h = require('react-hyperscript');

import React from 'react';


const style = {
    container: {},
    input: {margin: '1em', width: '60%'}
};


const UIData = React.createClass({
    getInitialState () {
        return {
            x: null,
            y: null
        };
    },

    render () {
        const {x, y} = this.state;

        const z = x && y ? x + y : null;

        return h('div', {style: style.container}, [
            h('input', {
                style: style.input, type: 'text', value: x, placeholder: 'X',
                onChange: ({target: {value}}) => {
                    const number = parseInt(value, 10);

                    this.setState({x: isNaN(number) ? null : number});
                }
            }),
            h('input', {
                style: style.input, type: 'text', value: y, placeholder: 'Y',
                onChange: ({target: {value}}) => {
                    const number = parseInt(value, 10);

                    this.setState({y: isNaN(number) ? null : number});
                }
            }),
            h('input', {style: style.input, type: 'text', disabled: 'disabled', value: z, placeholder: 'X+Y'})
        ]);
    }
});

export default UIData;
