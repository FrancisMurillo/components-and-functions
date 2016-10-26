const IfElse = R.curry((propsPredicate, truthyComponent, falsyComponent) => {
    return Component({
        render () {
            const {props, children} = this;

            const conditionalComponent =
              propsPredicate(this.props) === true ?
              truthyComponent : falsyComponent;

            return conditionalComponent(props, children);
        }
    });
});
