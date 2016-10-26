const ColorApp = Comp({
    getInitialState () {
        return {colors: this.props.colors || []}; // Take a list of colors as input
    },

    render () {
        return Elem('div', {style: {width: '100%'}}, [
            // TODO: Color Picker Component
            // TODO: Color List Component
        ]);
    }
});
