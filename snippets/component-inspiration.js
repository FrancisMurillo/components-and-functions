const myName = '<span><span>My name is </span><b>Duck Dodgers</b></span>';

// Base Element Components
const span = (props) => { return '<span>???</span>'; };
const b = (props) => { return '<p>???</p>'; };

// Say My Name v2
const BetterName = ({firstName, lastName}) => {
    // How do we have children?
    return span([ // Maybe like this?
        span('My name is '),
        b(`${firstName} ${lastName}`)
    ]);
};
