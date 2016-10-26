const computeComplementaryColor = null; // Our previous example

const updateLegibleColor = (props) => {
    const {style} = props;
    const {background} = style || {};

    const newStyle = background ? {
        ...style,
        color: computeComplementaryColor(background)
    } : style;

    return {
        ...props,
        style: newStyle
    };
};

const LegibleComponent = PropManipulator(updateLegibleColor);
