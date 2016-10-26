const ComposableComponent = (WrappedComponent) => {
    console.log('OMG, I\'m wrapping components!!!');

    return Component({
        render () {
            const {props, children} = this;

            console.log('I\'m calling the wrapped component!!');
            return WrappedComponent(props, children);
        }
    });
};

const MyComponent = Component({/* ... */});

const WrappedComponent = ComposableComponent(MyComponent);

const wrappedElement = WrappedComponent({});
