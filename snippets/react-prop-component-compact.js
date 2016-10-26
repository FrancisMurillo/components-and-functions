// Making aliases, your convention
const Comp = React.createClass;
const Elem = React.createElement;
const Rend = ReactDOM.render;

const SayMyName = Comp({
    render () {
        const {firstName, lastName} = this.props; // Also an equivalent form

        return Elem('div', {style: {background: 'white'}}, [
            Elem('span', {}, 'My name is '),
            Elem('b', {}, `${firstName} ${lastName}`)
        ]);
    }
});

Rend(
    Elem(SayMyName, {firstName: 'Luan', lastName: 'Loud'}, null),
    document.getElementById('container')
);
