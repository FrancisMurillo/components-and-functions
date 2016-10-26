const Component = (props, style, children) => {};

const list = ul(null, [
    li({style: {backgroundColor: '#ff0000'}}, 'RED'),
    // <li style="backgroundColor: #ff0000;">RED</li>
    li({style: {backgroundColor: '#00ff00', float: 'right'}}, 'GREEN'),
    // <li style="backgroundColor: #00ff00; float: right;">GREEN</li>
    li({style: {backgroundColor: '#0000ff', margin: '1em'}}, 'BLUE')
    // <li style="backgroundColor: #0000ff; margin: 1em;">BLUE</li>
]);
