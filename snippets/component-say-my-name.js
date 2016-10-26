import Renderer from './templative';

import {span, b} from './component-inspiration-dom';

const SayMyName = ({firstName, lastName}) => {
    // Looks better if I say so myself
    return span(null, [
        span(null, 'My name is '),
        b(null, `${firstName} ${lastName}`)
    ]);
};

Renderer(SayMyName({ // Let's inline call it
    firstName: 'Mister',
    lastName: 'Robot'
}), document.getElementById('component-say-my-name-block'));
