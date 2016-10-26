const CounterComponent = Comp({
    getInitialState () {
        return {counter: 0};
    },

    render () {
        const {counter} = this.state; // We now introduce this.state

        return Elem('button', {
            onClick: (ev) => {
                const incremented = this.state.coutner + 1;

                this.setState({counter: incremented});
            }
        }, counter ? `Clicked me ${counter} times.` : 'Click me');
    }
});
