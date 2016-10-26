const EventArea = React.createClass({
    render () {
        const {onMouseEnter, onMouseExit, onClick} = this.props;

        return React.createElement('div', {
            onMouseEnter,
            onMouseLeave,
            onClick
        });
    }
});
