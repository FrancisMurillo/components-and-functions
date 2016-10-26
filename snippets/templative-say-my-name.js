import Renderer from './templative';

const SayMyName = ({firstName, lastName}) => {
    return `<span><span>My name is </span>
              <b>${firstName} ${lastName}</b>
            </span>`;
};

const myName = SayMyName({
    firstName: 'Duck',
    lastName: 'Dodgers'
});

Renderer(myName, document.getElementById('templative-say-my-name-block'));
