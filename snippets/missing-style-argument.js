const Component = (props, style, children) => {};

const list = ul(null, [
    li(null, {backgroundColor: '#ff0000'}, 'RED'),
    // <li style="backgroundColor: #ff0000;">RED</li>
    li(null, {backgroundColor: '#00ff00', float: 'right'}, 'GREEN'),
    // <li style="backgroundColor: #00ff00; float: right;">GREEN</li>
    li(null, {backgroundColor: '#0000ff', margin: '1em'}, 'BLUE')
    // <li style="backgroundColor: #0000ff; margin: 1em;">BLUE</li>
]);
