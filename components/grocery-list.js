const h = require('react-hyperscript');

import React from 'react';

const styles = {
    container: {},
    sample: {backgroundColor: 'white', minHeight: '20%', margin: '1em'}
};


const GroceryList = () => {
    const id = 'grocery-list-block';

    return h('div', {style: styles.container}, [
        h('button', {
            onClick: () => {
                require('../snippets/grocery-list-component');
            }
        }, 'Click me to render()'),
        h('div', {id, style: styles.sample},
          h('p', null, 'Ready and waiting.'))
    ]);
};

export default GroceryList;
