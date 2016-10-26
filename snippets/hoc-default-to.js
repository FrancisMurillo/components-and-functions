const DefaultTo = R.curry((defaultComponent, propsPredicate, wrappedComponent) => {
    return Component({
        render () {
            const {props, children} = this;

            const conditionalComponent =
                  propsPredicate(this.props) === true ?
                  wrappedComponent : defaultComponent;

            return conditionalComponent(props, children);
        }
    });
});
