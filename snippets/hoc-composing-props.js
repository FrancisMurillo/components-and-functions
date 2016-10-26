const UserComponent = PropManipulator(userProps);
const LegibleComponent = PropManipulator(updateLegibleColor);

const UserLegibleComponent = R.compose(UserComponent, LegibleComponent);

const MyProfileComponent = Component({/* ... */ });

const MyLegibleProfileComponent = UserLegibleComponent(Component);
