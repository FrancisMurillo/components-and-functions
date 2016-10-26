import R from 'ramda';

// Redefining the component function with React and Ramda
const Component = R.compose(React.createFactory, React.createClass);


// Our Components Are Functions By Default
const FunctionalComponent = Component({render () { /* ... */ }});

const functionalElement = FunctionalComponent({});
