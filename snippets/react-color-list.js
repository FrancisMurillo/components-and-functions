const ColorBox = null; // TODO: Color component

const ColorList = Comp({
    render () {
        const {colors} = this.props;

        return colors.length ? // Check if there are colors
        Elem('div', {style: {}},
             colors.map((color) => { // Mapping over components is fun
                 return Elem(ColorCard, {color});
             }))
        : Elem('p', null, 'No colors to display yet.');
    }
});
