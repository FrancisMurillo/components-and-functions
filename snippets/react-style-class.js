const styles = {
    button: {
        border: '1px solid blue',
        background: '#cccccc'
    },
    loginAction: {
        background: '#3498db', // Overrides button.background
        color: '#ff0000'
    }
};
return Elem('a', {
    // Equivalently Object.assign({}, button, loginAction)
    style: [styles.button, styles.loginAction]
});
