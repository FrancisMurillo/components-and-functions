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
                Loading({type: 'spin'}, null) : // Third party loading
                wrappedComponent({props, [promiseKey]: this.state.value}, children);
        }
    });
});
