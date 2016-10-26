const h = require('react-hyperscript');

import React from 'react';

const styles = {
    container: {},
    input: {margin: '1em'}
};


const CounterComponent = React.createClass({
    getInitialState () {
        return {counter: 0};
    },

    render () {
        const {counter} = this.state; // We now introduce this.state

        return h('button', {
            onClick: (ev) => {
                const incremented = this.state.counter + 1;

                this.setState({counter: incremented});
            }
        }, counter ? `Clicked me ${counter} times.` : 'Click me');
    }
});

export default CounterComponent;
