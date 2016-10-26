const user = {name: 'fnmurillo', email: 'francisavmurillo@gmail.com'};

const userProps = (props) => {
    return {
        ...props,
        user
    };
};

const UserComponent = PropManipulator(userProps);

const Header = UserComponent(Component)({ /* ... */});
const Footer = UserComponent(Component)({ /* ... */});
