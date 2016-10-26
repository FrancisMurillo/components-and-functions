const ColorApp = Comp({
    getInitialState () {
        return {colors: this.props.colors || []};
    },

    render () {
        return Elem('div', {style: {width: '100%'}}, [
            Elem(ColorPicker, {
                onColorSelect: (color) => {
                    const newColors = this.state.colors.concat(color);

                    this.setState({color: newColors});
                }
            }),
            Elem(ColorList, {colors: this.state.colors})
        ]);
    }
});
