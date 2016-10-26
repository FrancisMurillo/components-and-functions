import {ul, div, li, b} from './component-list-dom-v3.js';
import Renderer from './templative';
import {getItemColor} from './color-scheme';
import groceryList from './grocery-list';

const GroceryList = ({items}, children) => {
    return ul(null, items.map((item) => {  // Nice to map over your components
        const {name} = item;
        const style = {backgroundColor: getItemColor(item)};
        return li(null,
             div({style},
                 b(null, name))
            );
    }));
};

Renderer(GroceryList({items: groceryList}), document.getElementById('grocery-list-block'));
