const isUserAdmin = ({user}) => user.role === 'admin';

// Default To
const EmptyDOM = ReactDOM.div; // Empty div component
const ActionButton = Component({/* ... */});

const DefaultedComponent = DefaultTo(EmptyDOM);
const AppActionButton = DefaultedComponent(isUserAdmin, ActionButton);

// If Then Else
const UserView = Component({/* ,,, */});
const AdminView = Component({/* ,,, */});

const AppView = IfElse(isUserAdmin, UserView, AdminView);
