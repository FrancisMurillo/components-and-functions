const ColorBox = Comp({
    render () {
        const {color} = this.props;
        const {onToggle, onRemove} = this.props; // Extra events

        return Elem('div', {
            style: {
                border: '1px solid black',
                width: '4em',
                height: '4em',
                background: color
            },
            onClick: onToggle,
            onDoubleClick: onRemove
        });
    }
});
