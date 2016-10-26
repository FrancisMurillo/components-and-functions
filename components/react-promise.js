const h = require('react-hyperscript');

import React from 'react';

import R from 'ramda';

import Loading from 'react-loading';

const Loader = React.createFactory(Loading);

const styles = {
    container: {},
    input: {margin: '1em'}
};

const Component = R.compose(React.createFactory, React.createClass);

const Promised = R.curry((promise, promiseKey, wrappedComponent) => {
    return Component({
        getInitialState () {
            return {
                loading: true,
                value: undefined
            };
        },
        componentDidMount () {
            promise.then((value) => { this.setState({value, loading: false}); });
        },
        render () {
            const {props, children} = this;
            return this.state.loading ?
                Loader({type: 'spin'}, null) : // Third party loading
                wrappedComponent({props, [promiseKey]: this.state.value}, children);
        }
    });
});

const Identity = Component({
    render () {
        return React.createElement('b', null, this.props.text);
    }
});

const App = Component({
    getInitialState () {
        return {clicked: false, component: null};
    },

    render () {
        return !this.state.clicked ?
            h('button', {
                onClick: () => {
                    this.setState({clicked: true});

                    const promise = new Promise((res) => {
                        setTimeout(() => {
                            res('Functional Programming Is Cool');
                        }, 5000);
                    });

                    this.setState({component: Promised(promise, 'text', Identity)});
                }
            }, 'Click me to start loading') :
        h(this.state.component, null);
    }
});

export default App;
