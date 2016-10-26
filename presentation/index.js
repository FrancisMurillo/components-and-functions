const h = require('react-hyperscript');

import React from 'react';

import {p} from 'react-dom';

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    Code,
    CodePane,
    Deck,
    Fill,
    Fit,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from 'spectacle';

// Snippets
import ReactCreateComponent from '../snippets/react-create-component';
import myNameElement from '../snippets/react-prop-component-final';


// Components
import UIData from '../components/ui-as-data';
import TemplativeSample from '../components/templative-sample';
import ContemplativeSample from '../components/contemplative-sample';
import GroceryList from '../components/grocery-list';
import ReactProgramaticCss from '../components/react-programatic-css';
import ReactDOMEvent from '../components/react-dom-event';
import ReactStateful from '../components/react-stateful';
import ReactColorful from '../components/react-colorful';
import ReactPromise from '../components/react-promise';

// Import theme
import createTheme from 'spectacle/lib/themes/default';


// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


// Utility
const snippet = (script) => {
    return require(`!!raw!../snippets/${script}.js`);
};


const theme = createTheme({
    comment: '#586e75',
    background: '#002b36',
    backgroundHighlight: '#586e75',

    text: '#839496',
    emphasizedText: '#cb4b16',

    link: '#2aa198',

    bluish: {
        background: '#0072BF',
        foreground: '#002640'
    }
}, {secondary: 'DejaVuSansMono'});

const color = {
    white: '#ffffff',

    black: '#000000',
    red: '#c0392b',

    blue: '#2980b9',
    lightBlue: '#3498db',

    lightGreen: '#27ae60',

    gray: '#586e75'
};

const link = {
    github: 'https://github.com/FrancisMurillo/components-and-functions',
    email: 'francisavmurillo@gmail.com',
    githubName: 'FrancisMurillo',

    react: 'https://facebook.github.io/react/',
    spectacle: 'https://github.com/FormidableLabs/spectacle'
};

const Presentation = (_) => {
    return h(Spectacle,
             {theme},
             h(Deck,
               {
                   progress: 'none',
                   controls: false,
                   transition: ['slide'],
                   transitionDuration: 500
               },
               [
                   h(Slide, {bgColor: '#00a5e5'}, [
                       h(Text, {textColor: color.gray},
                         'Oct. 25, 2016'),
                       h(Text, {bold: true, textColor: color.gray},
                         '5th Functional Programming Meetup'),
                       h(Text, {textColor: color.gray, lineHeight: 1.0},
                         'By The Mediocre Developer(@FrancisMurillo)'),
                       h(Heading, {
                           size: 1, fit: true, caps: true,
                           lineHeight: 2.0, textColor: color.black
                       },
                         'Frontend Functions'),
                       h(Text, {textColor: color.black},
                         'Functions, Components, UIs'),
                       h(Text, {textColor: color.black, italic: true, bold: true},
                         '... and maybe some ReactJS'),
                       h(Link, {href: link.github},
                         h(Text, {bold: true, textColor: color.white, lineHeight: 2.5},
                           'FrancisMurillo/frontend-functions'))
                   ]),
                   h(Slide, {bgColor: '#00c0cc'}, [
                       h(Heading, {size: 2, bold: true, textColor: color.white},
                         'Functional Programming Is Great.'),
                       h(Text, {lineHeight: 2.0},
                         'No apologies here.'),
                       h(Text, {lineHeight: 1.0, bold: true},
                         'How about some big words to back this up.')
                   ]),
                   h(Slide, {bgColor: '#00c0cc'}, [
                       h(Heading, {size: 3, bold: true, textColor: color.white},
                         'State(Less)'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('stateless')
                       }, null),
                       h(Text, {lineHeight: 1.0},
                         'Less state. Less (mental) stress.')
                   ]),
                   h(Slide, {bgColor: '#00c0cc'}, [
                       h(Heading, {size: 3, bold: true, textColor: color.white},
                         'Purity / Transparency'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('purity')
                       }, null),
                       h(Text, {lineHeight: 1.0},
                         'Easier to reuse and test.')
                   ]),
                   h(Slide, {bgColor: '#00c0cc'}, [
                       h(Heading, {size: 3, bold: true, textColor: color.white},
                         'Modularity / Isolation'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('modularity')
                       }, null),
                       h(Text, {lineHeight: 1.0},
                         'Extensibile and Declarative code anyone?')
                   ]),
                   h(Slide, {bgColor: '#00c0cc'}, [
                       h(Text, {textColor: color.black},
                         'But really all this is in service of...'),
                       h(Heading, {size: 2, textColor: color.white},
                         'Making development easier and maintainable'),
                       h(Appear, null,
                         h(Text, {textColor: color.black, lineHeight: 2.0},
                           'But there is another factor...'))
                   ]),
                   h(Slide, {bgColor: '#4b51ff'}, [
                       h(Heading, {size: 2, textColor: color.white},
                         'Fun(ctional)'),
                       h(Text, {textColor: color.white},
                         'Functional Programming for its own sake.')
                   ]),


                   h(Slide, {bgColor: '#4b51ff'}, [
                       h(Heading, {size: 2, textColor: color.black},
                         'How Do You Build The UI(DOM) Functionally?'),
                       h(Text, {textColor: color.white, lineHeight: 2.0},
                         'Everything must be a (composable) function.'),
                       h(Code, null, 'View :: Data -> UI'),
                       h(Text, {textColor: color.white, lineHeight: 2.0},
                         'Remembering the days of  DOM Manipulation libraries.')
                   ]),

                   h(Slide, {bgColor: '#4b51ff'}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'The Presentation Structure'),
                       h(Text, {textColor: color.white, lineHeight: 1.0},
                         'The three part function.'),
                       h(Text, {textColor: color.white, lineHeight: 2.0, bold: true},
                         'Act #1: Component Function'),
                       h(Text, {textColor: color.white, lineHeight: 2.0, bold: true},
                         'Act #2: ReactJS'),
                       h(Text, {textColor: color.white, lineHeight: 2.0, bold: true},
                         'Act #3: Higher Order Components'),
                       h(Text, {textColor: color.white, lineHeight: 3.0},
                         'Just relax and enjoy the ride.')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Heading, {textColor: color.black},
                         'Act #1'),
                       h(Heading, {textColor: color.black, size: 2},
                         'Component Function'),
                       h(Text, {textColor: color.white, lineHeight: 2.0, bold: true},
                         'The functional ideals for building the UI.'),
                       h(Text, {textColor: color.white},
                         'Let\'s try to build a component system for exploration.'),
                       h(Text, {textColor: color.white},
                         '(until we hit a wall)')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'What are components?'),
                       h(UIData, null),
                       h(Text, {textColor: color.white, lineHeight: 1.5},
                         '4 Components = 3 Textboxes + 1 Container'),
                       h(Text, {textColor: color.white, bold: true},
                         'But modular pieces of the UI?'),
                       h(Text, {textColor: color.white, lineHeight: 2.0},
                         'Instead of writing HTML, let\'s write functions that write HTML.')
                   ]),
                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Data In(, And Component), Element Out'),
                       h(Code, null,
                         'Component :: Object -> Element'),
                       h(Text, {textColor: color.white, lineHeight: 2.0},
                         'To start, let us start with component functions.'),
                       h(CodePane, {
                           lang: 'js',
                           source: 'const Component = (props) => { return Element; }; '
                       }),
                       h(Text, {textColor: color.white, bold: true},
                         'These are functions that take an object data(or properties) and returns a (DOM) element or abstraction.')
                   ]),
                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Element Renderer'),
                       h(Code, null,
                         'Renderer :: Element -> DOM'),
                       h(Text, {textColor: color.white, lineHeight: 2.0},
                         'Now whatever element abstraction we use, we need to render it.'),
                       h(CodePane, {
                           lang: 'js',
                           source: 'const Renderer = (element, node) => { return RenderedNode; }; '
                       }),
                       h(Text, {textColor: color.white, bold: true},
                         'This is a function that takes an element and dom node and renders that element on that node.')
                   ]),
                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Component, Element and Renderer'),
                       h(Text, {textColor: color.white},
                         'So how does these three look like?'),
                       h(Text, {textColor: color.white},
                         'Let\'s implement them with our familiar friend...'),
                       h(Text, {textColor: color.white, bold: true, lineHeight: 2.0},
                         'String Templates')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'String Template Components'),
                       h(Text, {textColor: color.white},
                         'So with template strings, let us assume element is also a string.'),
                       h(Code, null,
                         'Element :: String'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('templative')
                       }, null),
                       h(Text, {textColor: color.white, bold: true},
                         'Let\'s try this out on a simple problem.')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Test #01: Say My Name'),
                       h(Text, {textColor: color.white, lineHeight: 1.5},
                         'Given a first name and last name, output it.'),
                       h(Text, {textColor: color.white},
                         'A simple problem to try out our new (and naive) functional paradigm.'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('templative-say-my-name')
                       }, null)
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Demo #01: Say My Name'),
                       h(Text, {textColor: color.white},
                         'What\'s code without a demo?'),
                       h(TemplativeSample, null)
                   ]),


                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'It works...'),

                       h(Text, {textColor: color.white, lineHeight: 2.5, bold: true},
                         '... but maybe we can do better.'),
                       h(Text, {textColor: color.white},
                         'Let\'s see if we can make it more compartmentalized or functionally composed.')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'How about we turn the DOM Elements into functions next?'),

                       h(CodePane, {
                           lang: 'js',
                           source: snippet('component-inspiration')
                       }, null),

                       h(Text, {textColor: color.white},
                         'Since we are abstracting over the DOM, how do we represent child elements inside a parent?')
                   ]),


                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'How about adding a *children* property to *props*?'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('component-inspiration-props')
                       }, null),

                       h(Text, {textColor: color.white},
                         'A little awkward to represent XML like structures.')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Now how about adding a *children* argument to every component?'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('component-inspiration-argument')
                       }, null),

                       h(Text, {textColor: color.white},
                         'Good enough, let\'s roll with this.')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Our Component Definition'),
                       h(Code, null,
                         'Component :: Object -> [Element] -> Element'),
                       h(Text, {textColor: color.white, lineHeight: 2.0},
                         'To formalize a bit'),
                       h(CodePane, {
                           lang: 'js',
                           source: 'const Component = (props, children) => { return ElementWithChildren; };'
                       }),
                       h(Text, {textColor: color.white},
                         'And remember strings are also elements so we can use them directly too.'),
                       h(Text, {textColor: color.white, bold: true, lineHeight: 2.0},
                         'Why don\'t we see this in refactored action')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Test #01: Say My Name(Redux)'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('component-say-my-name')
                       }, null),

                       h(Text, {textColor: color.white},
                         'Looks good.')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Demo #01: Say My Name(Redux)'),
                       h(Text, {textColor: color.white},
                         'Another demo to cement our functionality.'),
                       h(ContemplativeSample, null)
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.white, lineHeight: 2.5, bold: true},
                         'Component Function'),
                       h(Text, {textColor: color.white},
                         'This represents our ideal: components as simple functions. This is our (syntatic) baseline for what we want our library( or framework) to be.'),
                       h(Text, {textColor: color.white, bold: true, lineHeight: 2.0},
                         'Let\'s tackle one more problem before we move on.')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Test #02: Grocery List'),
                       h(Text, {textColor: color.white, lineHeight: 1.5},
                         'Given a list of items to buy, display it'),
                       h(Text, {textColor: color.white},
                         'But let\'s add some color coding based on its type.'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('grocery-list')
                       }, null)
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'How About Some New Tags'),
                       h(Text, {textColor: color.white},
                         'We need some auxiliary elements.'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('component-list-dom')
                       }, null)
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Our Color Scheme'),
                       h(Text, {textColor: color.white},
                         'Let\'s define a function for our color scheme'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('color-scheme')
                       }, null)
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'How Do We Add CSS Anyway?'),
                       h(Text, {textColor: color.white, bold: true},
                         'Like with the *children*, we can do it in two ways.'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('missing-style')
                       }, null)
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'We Can Add A *style* Argument'),
                       h(Text, {textColor: color.white, lineHeight: 1.5},
                         'Let\'s assume it is an object instead of a string, which is converted properly.'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('missing-style-argument')
                       }, null),
                       h(Text, {textColor: color.white, lineHeight: 1.5},
                         'This is okay but doesn\'t seem to be attribute like.')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'We Can Add A Special *style* Property To *props*'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('missing-style-props')
                       }, null),
                       h(Text, {textColor: color.white, lineHeight: 1.5},
                         'Seems more inline with what class attributes are. Let\'s ride with this')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Let\'s Support The New Style'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('component-list-dom-v2')
                       }, null)
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Finally, Our Grocery Component'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('grocery-list-component')
                       }, null)
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Demo #02: Grocery List'),
                       h(Text, {textColor: color.white},
                         'One more push before moving on.'),
                       h(GroceryList, null)
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'String Components'),
                       h(Text, {textColor: color.white, lineHeight: 1.5},
                         'We can keep building this up if we want to.'),
                       h(Text, {textColor: color.white},
                         'Let\'s see what else we could have implemented')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true, lineHeight: 2.0},
                         'Feature List'),
                       h(Text, {textColor: color.white, bold: true, lineHeight: 1.0},
                         'HTML Escaping'),
                       h(Text, {textColor: color.black, italic: true, lineHeight: 1.5},
                         'SQL Injection or XSS Attack'),

                       h(Text, {textColor: color.white, lineHeight: 1.0, bold: true},
                         'DOM Attributes'),
                       h(Text, {textColor: color.black, italic: true, lineHeight: 1.5},
                         'Class name, ID and other attributes'),

                       h(Text, {textColor: color.white, lineHeight: 1.0, bold: true},
                         'Event Handling'),
                       h(Text, {textColor: color.black, italic: true, lineHeight: 1.5},
                         'Where is our onClick our onHover?'),

                       h(Text, {textColor: color.black, lineHeight: 2.0},
                         'But what did we really miss?')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true, lineHeight: 2.0},
                         'Functional Fallout'),
                       h(Text, {textColor: color.white, bold: true, lineHeight: 1.0},
                         'Rendering Mismatch'),
                       h(Text, {textColor: color.black, italic: true, lineHeight: 1.5},
                         'The element renders itself, not the renderer'),

                       h(Text, {textColor: color.white, lineHeight: 1.0, bold: true},
                         'Performance'),
                       h(Text, {textColor: color.black, italic: true, lineHeight: 1.5},
                         'Nuking the HTML and building it up again'),

                       h(Text, {textColor: color.white, lineHeight: 1.0, bold: true},
                         'DOM State'),
                       h(Text, {textColor: color.black, italic: true, lineHeight: 1.5},
                         'Ignoring state is dangerous'),

                       h(Appear, null,
                         h(Text, {textColor: color.black, lineHeight: 2.0, bold: true},
                           'So what does this tell us?'))
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Heading, {textColor: color.black},
                         'Strings Are Bad Data Abstractions'),
                       h(Text, {textColor: color.white, bold: true, lineHeight: 1.0},
                         'For serialization but not to represent abstractions.')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true, lineHeight: 2.0},
                         'Other (Fun) Abstractions'),

                       h(Text, {textColor: color.white, bold: true, lineHeight: 1.5},
                         'Objects'),

                       h(Text, {textColor: color.white, lineHeight: 1.5, bold: true},
                         'Arrays'),

                       h(Appear, null,
                         h(Text, {textColor: color.red, lineHeight: 1.5, bold: true},
                           'jQuery'))
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Heading, {textColor: color.black},
                         'DOM Is Not Pure'),
                       h(Text, {textColor: color.white, bold: true, lineHeight: 1.0},
                         'This is our true challenge.'),
                       h(Text, {textColor: color.black},
                         'Whatever implementation must deal with this.'),
                       h(Appear, null,
                         h(Text, {textColor: color.black, lineHeight: 2.0, bold: true},
                           'So we need a better abstraction but what?'))
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Heading, {textColor: color.black},
                         'Act #1 Recap'),
                       h(Heading, {textColor: color.white, size: 2},
                         'Component Function'),
                       h(Text, {textColor: color.white, lineHeight: 2.0, bold: true},
                         'The view is a function of data.'),
                       h(CodePane, {
                           lang: 'js',
                           source: 'const Component = (props, children) => { return Element; };'
                       })
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Heading, {textColor: color.black},
                         'Act #2'),
                       h(Heading, {textColor: color.black, size: 2},
                         'ReactJS'),
                       h(Text, {textColor: color.white, lineHeight: 3.0, bold: true},
                         'Our Functional DOM Abstraction'),
                       h(Text, {textColor: color.white},
                         '(By the way this presentation is made in ReactJS)'),
                       h(Link, {href: link.spectacle},
                         h(Text, {bold: true, textColor: color.white},
                           'FormidableLabs/spectacle'))
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'What is ReactJS'),
                       h(Text, {textColor: color.white, italic: true},
                         '\"React is an open-source JavaScript library providing a view for data rendered as HTML. React views are typically rendered using components that contain additional components specified as custom HTML tags. React promises programmers a model in which subcomponents cannot directly affect enclosing components; efficient updating of the HTML document when data changes; and a clean separation between components on a modern single-page application.\"'),

                       h(Link, {href: link.spectacle},
                         h(Text, {bold: true, textColor: color.white, lineHeight: 1.5},
                           'Facebook/react'))
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'TLDR;'),
                       h(Text, {textColor: color.black},
                         'It is a UI component library'),
                       h(Text, {textColor: color.white, lineHeight: 2.0},
                         'Okay, so what?')
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'What does this afford us?'),
                       h(Text, {textColor: color.white, lineHeight: 2.0, bold: true},
                         'Relevant and Popular (and a good study)'),
                       h(Text, {textColor: color.white, lineHeight: 2.0, bold: true},
                         'Write the whole UI with Javascript alone(almost)'),
                       h(Text, {textColor: color.black, lineHeight: 2.0, bold: true},
                         '(Functionally) Pure DOM'),
                       h(Text, {textColor: color.white, lineHeight: 3.0},
                         'For now, we are interested in the second point.')
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Creating Components'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('react-create-component')
                       }, null),

                       h(Text, {textColor: color.white},
                         'This is at best a class/object with one method called render which returns an element.')
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Rendering Components'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('react-render-component')
                       }, null),
                       h(Text, {textColor: color.white},
                         'So rendering takes a component and a DOM element. That was easy.')
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Demo #03: Hello React'),
                       h(Text, {textColor: color.white},
                         'One Hello World Component Coming Up'),
                       h(ReactCreateComponent, null, null)
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'View As A Function Of Data'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('react-prop-component')
                       }, null)
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Making It Less Verbose'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('react-prop-component-compact')
                       }, null)
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Demo #04: Say My Name (React Redux)'),
                       h(Text, {textColor: color.white},
                         '(Aren\'t you getting bored of text demos?)'),
                       myNameElement,
                       h(Text, {textColor: color.white, lineHeight: 2.0},
                         'So we\'re at where we started the last time.')
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'A Quick Montage Of UI Features'),
                       h(Text, {textColor: color.black},
                         'Before functionally nerding/geeking out, what features allows you to build the UI just with this?'),
                       h(Text, {textColor: color.black},
                         'Remember to use your imagination.')
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Programatic CSS'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('react-programatic-css')
                       }, null),
                       h(Text, {textColor: color.white},
                         'The *style* field is just an object, meaning you can treat CSS as code and compute for it. (What is CSS again?)')
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Demo #05: CSS As Code'),
                       h(Text, {textColor: color.white},
                         'Is the color black or white?'),
                       h(ReactProgramaticCss, null),
                       h(Text, {textColor: color.white, lineHeight: 2.0},
                         'Treating styles as objects is very appealing.')
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Styles Overriding'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('react-style-class')
                       }, null),
                       h(Text, {textColor: color.white},
                         '*style* can accept an list of styles and it will combine it like CSS classes.')
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'DOM Events'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('react-dom-events')
                       }, null),
                       h(Text, {textColor: color.white},
                         'What is the DOM without events?')
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Demo #06: Event Handling'),
                       h(Text, {textColor: color.white},
                         'Where is the mouse?'),
                       h(ReactDOMEvent, null),
                       h(Text, {textColor: color.white, lineHeight: 2.0},
                         'React emulates native Javascript events nicely.')
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Stateful Components'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('react-stateful')
                       }, null),
                       h(Text, {textColor: color.white},
                         'The reason why we are dealing with classes although I will not delve into this.')
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Demo #07: Stateful Component'),
                       h(Text, {textColor: color.white},
                         'What is a program without state?'),
                       h(ReactStateful, null),
                       h(Text, {textColor: color.white, lineHeight: 2.0},
                         'React provides state management which is a wide topic itself.')
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Think About This'),
                       h(Text, {textColor: color.black, bold: true, lineHeight: 3.0},
                         'Those features allow you to build the UI with just JS'),
                       h(Text, {textColor: color.white},
                         'That alone makes this library worth a look.'),
                       h(Text, {textColor: color.white, bold: true, lineHeight: 2.0},
                         'One more exhibition before closing this second act.')
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Building Up A List'),
                       h(Text, {textColor: color.white, bold: true},
                         'Instead of a todo list, how about a list of colors?'),
                       h(Text, {textColor: color.white},
                         'This is an sample workflow with components.')
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'App Component'),
                       h(Text, {textColor: color.white},
                         'Let\'s go top to bottom with the app container.'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('react-color-container')
                       }, null)
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Color Picker Component'),
                       h(Text, {textColor: color.white},
                         'Next we create a component for selecting colors.'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('react-color-selector')
                       }, null)
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Color List Component'),
                       h(Text, {textColor: color.white},
                         'Then we create the list component'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('react-color-list')
                       }, null)
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Color Box'),
                       h(Text, {textColor: color.white},
                         'Finally, we create the color component'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('react-color-box')
                       }, null)
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Wrapping It Up'),
                       h(Text, {textColor: color.white},
                         'Tying the bow'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('react-color-container-final')
                       }, null)
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Demo #08: Color App'),
                       h(Text, {textColor: color.white},
                         'The payoff'),
                       h(ReactColorful, null)
                   ]),

                   h(Slide, {bgColor: color.lightBlue}, [
                       h(Text, {textColor: color.white, bold: true, caps: true},
                         'Think About This'),
                       h(Text, {textColor: color.black, bold: true, lineHeight: 3.0},
                         'We didn\'t touch the DOM directly, but the data.'),
                       h(Text, {textColor: color.white},
                         'Thanks to the the VirtualDOM, we can act as if the DOM is pure or side effect free.')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Text, {textColor: color.black, bold: true, caps: true, lineHeight: 2.0},
                         'Things We Did Not Talk About'),

                       h(Text, {textColor: color.white, bold: true, lineHeight: 1.5},
                         'Stateful and Stateless Components'),

                       h(Text, {textColor: color.white, lineHeight: 1.5, bold: true},
                         'Component Lifecycle'),

                       h(Text, {textColor: color.white, lineHeight: 1.5, bold: true},
                         'JSX')
                   ]),

                   h(Slide, {bgColor: color.blue}, [
                       h(Heading, {textColor: color.black},
                         'Act #2 Recap'),
                       h(Heading, {textColor: color.white, size: 2},
                         'ReactJS'),
                       h(Text, {textColor: color.white, lineHeight: 2.0, bold: true},
                         'Building the UI functionally'),
                       h(Appear, null,
                         h(Text, {textColor: color.white, lineHeight: 2.0, bold: true},
                           'But we\'re forgetting something...'))
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Heading, {textColor: color.black},
                         'Act #3'),
                       h(Heading, {textColor: color.black, size: 2},
                         'Higher Order Component'),
                       h(Text, {textColor: color.white, lineHeight: 3.0, bold: true},
                         'This is where we geek out functionally.')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'I thought this was a functional programming meetup?'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('where-function')
                       }, null),
                       h(Text, {textColor: color.black},
                         'Why am I getting classes?')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Turning Classes Into A Function'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('class-to-function')
                       }, null),
                       h(Text, {textColor: color.black},
                         'React allows components to be either components or functions.')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Refactoring The Component Function'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('component-function')
                       }, null),
                       h(Text, {textColor: color.black},
                         'Ramda is a functional library that will help guide our efforts.')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.white, bold: true, caps: true},
                         'This is not about ReactJS'),
                       h(Text, {textColor: color.white},
                         'You could just build the UI without being functional anyway.'),
                       h(Text, {textColor: color.black},
                         'This is about functions and how we think about them.')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Composing Components'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('composing-components')
                       }, null),
                       h(Text, {textColor: color.black},
                         'If components are functions, can\'t we compose them?')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true, lineHeight: 2.0},
                         'Frontend Functions'),

                       h(Text, {textColor: color.white, bold: true, lineHeight: 1.5},
                         'Manipulating props'),

                       h(Text, {textColor: color.white, lineHeight: 1.5, bold: true},
                         'Conditional rendering'),

                       h(Text, {textColor: color.white, bold: true, lineHeight: 1.5},
                         'Promises'),

                       h(Text, {textColor: color.black, lineHeight: 2.0},
                         'Chill and just enjoy the ride')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Function Of Functions'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('hoc-function-of-functions')
                       }, null),
                       h(Text, {textColor: color.black},
                         'Manipulating arguments of a function is a higher order function.')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Manipulating props'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('hoc-manipulating-props')
                       }, null),
                       h(Text, {textColor: color.black},
                         'By manipulating props, you can add, remove or update the property object.')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Adding Props'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('hoc-adding-props')
                       }, null),
                       h(Text, {textColor: color.black},
                         'Say you have a user object, you can propagate the data as an higher order component.')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Updating Style'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('hoc-updating-style')
                       }, null),
                       h(Text, {textColor: color.black},
                         'You can also manipulate the style.')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Two Functions Make Three'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('hoc-composing-props')
                       }, null),
                       h(Text, {textColor: color.black},
                         'Manipulating props is also a higher order component. So is composing them.')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Function And Branches'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('hoc-function-and-branches')
                       }, null),
                       h(Text, {textColor: color.black},
                         'Knowing when to call a function is also a higher order function.')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Default Component'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('hoc-default-to')
                       }, null),
                       h(Text, {textColor: color.black},
                         'Analogously, you can create default component values.')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'If Else Component'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('hoc-if-else')
                       }, null),
                       h(Text, {textColor: color.black},
                         'Similarly, you can create an if then else component.')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Smart Components'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('hoc-conditional-components')
                       }, null),
                       h(Text, {textColor: color.black},
                         'By taking the logic out of components, component composition is emphasized')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'One More Promise'),
                       h(CodePane, {
                           lang: 'js',
                           source: snippet('hoc-promise')
                       }, null)
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         '(Final) Demo #09: Promise'),
                       h(Text, {textColor: color.white},
                         'After 5 seconds, the final message is displayed'),
                       h(ReactPromise, null)
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true, lineHeight: 2.0},
                         'Things We Could Geek About'),

                       h(Text, {textColor: color.white, bold: true, lineHeight: 1.5},
                         'Inheritance Composition'),

                       h(Text, {textColor: color.white, lineHeight: 1.5, bold: true},
                         'Render Jacking'),

                       h(Text, {textColor: color.white, lineHeight: 1.5, bold: true},
                         'State Containers')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true, lineHeight: 2.0},
                         '(Frontend) Functions'),

                       h(Text, {textColor: color.white, bold: true, lineHeight: 1.5},
                         'Modularity'),

                       h(Text, {textColor: color.white, lineHeight: 1.5, bold: true},
                         'Separation Of Concern'),

                       h(Text, {textColor: color.white, lineHeight: 1.5, bold: true},
                         'Pure And Impure Components')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'Warning'),
                       h(Text, {textColor: color.black},
                         'As programmers, decide carefully when you want to use it.'),
                       h(Text, {textColor: color.white, lineHeight: 1.0},
                         'It is an abstraction that you may or may not want or sometimes anlienating your coworkers because of it.'),
                       h(Text, {textColor: color.black, lineHeight: 2.0},
                         'But isn\'t cool?')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Heading, {textColor: color.black},
                         'Act #3 Recap'),
                       h(Heading, {textColor: color.white, size: 2},
                         'Higher Order Components'),
                       h(Text, {textColor: color.white, lineHeight: 2.0, bold: true},
                         'With ReactJS, you can make a functional UI (sort of)')
                   ]),

                   h(Slide, {bgColor: color.lightGreen}, [
                       h(Text, {textColor: color.black, bold: true, caps: true},
                         'References'),

                       h(Link, {href: 'https://github.com/dominictarr/hyperscript'},
                         h(Text, {bold: true, textColor: color.white, lineHeight: 1.5},
                           'hyperscript')),

                       h(Link, {href: 'http://omniscientjs.github.io/'},
                         h(Text, {bold: true, textColor: color.white, lineHeight: 1.5},
                           'omniscientjs')),

                       h(Link, {href: 'https://medium.com/@sebjwallace/less-react-more-js-409e6e26e1'},
                         h(Text, {bold: true, textColor: color.white, lineHeight: 1.5},
                           'Less React, more JS')),

                       h(Link, {href: 'https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.d0qodr4ms'},
                         h(Text, {bold: true, textColor: color.white, lineHeight: 1.5},
                           'React Higher Order Components in depth'))

                   ]),

                   h(Slide, {bgColor: '#9b59b6'}, [
                       h(Heading, {size: 2, textColor: color.white},
                         'Thanks For Your Time'),
                       h(Text, {textColor: color.white, size: 2},
                         'My thesis is finally over.')
                   ]),

                   h(Slide, {bgColor: '#9b59b6'}, [
                       h(Heading, {size: 2, textColor: color.white},
                         'Questions?')
                   ])
               ]));
};

export default Presentation;
