const PropManipulator = R.curry((propMapper, WrappedComponent) => {
    return Component({
        render () {
            const {props, children} = this;

            // Remap old props to new
            const newProps = propMapper(props);

            // Render the wrapped component with the new one
            return WrappedComponent(newProps, children);
        }
    });
});
