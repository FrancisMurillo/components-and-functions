const {style, text} = this.props;
const {background} = style;

const computeComplementaryColor = (hexCode) => "#123456"; // Too long to write down

const newStyle = {
    ...style,
    color: computeComplementaryColor (background)
}

return Elem('span', {style: newStyle}, text);
