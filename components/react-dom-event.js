const h = require('react-hyperscript');

import React from 'react';

const styles = {
    container: {},
    input: {margin: '1em'}
};


const EventArea = React.createClass({
    render () {
        const {onMouseEnter, onMouseLeave, onClick, color} = this.props;

        return React.createElement('div', {
            style: {
                width: '100%',
                height: '3em',
                background: 'white',

                background: color
            },
            onMouseEnter,
            onMouseLeave,
            onClick
        });
    }
});

const ReactDOMEvent = React.createClass({
    getInitialState () {
        return {
            status: 'Do something',
            color: 'white'
        };
    },

    render () {
        const {status, color} = this.state;

        return h('div', styles.container, [
            h('p', null, status),
            h(EventArea, {
                color: color,
                onMouseEnter: (e) => {
                    this.setState({status: 'Don\'t touch anything', color: 'orange'});
                },
                onMouseLeave: (e) => {
                    this.setState({status: 'Get back in here', color: 'white'});
                },
                onClick: (e) => {
                    const {clientX, clientY} = e;

                    this.setState({status: `You clicked at ${clientX},${clientY}`, color: 'red'});
                }
            })
        ]);
    }
});


export default ReactDOMEvent;
