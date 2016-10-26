const h = require('react-hyperscript');

import React from 'react';

import Dropdown from 'react-dropdown';

const ColorPicker = React.createClass({
    render () {
        const {colors, onColorSelect} = this.props;

        return h(Dropdown, { // Using a wrapped select element
            options: colors,
            placeholder: 'Select a color',
            onChange: ({value, label}) => { onColorSelect(value); }
        });
    }
});

const ColorBox = React.createClass({
    render () {
        const {color} = this.props;
        const {onSelect, onRemove} = this.props; // Extra events

        return h('div', {
            style: {
                border: '5px solid black',
                width: '4em',
                height: '4em',
                float: 'left',
                background: color
            },
            onClick: onSelect.bind(null, color),
            onDoubleClick: onRemove.bind(null, color)
        });
    }
});

const ColorList = React.createClass({
    render () {
        const {colors, onRemoveColor, onSelectColor} = this.props;

        return colors.length ? // Check if there are colors
        h('div', {style: {display: 'inline', width: '100%'}},
          colors.map((color) => { // Mapping over components is fun
              return h(ColorBox, {
                  color,
                  onRemove: onRemoveColor,
                  onSelect: onSelectColor
              });
          }))
        : h('p', null, 'No colors to display yet.');
    }
});

const ColorApp = React.createClass({
    getInitialState () {
        return {colors: []};
    },

    render () {
        return h('div', {style: {width: '100%'}}, [
            h(ColorPicker, {
                colors: this.props.colors,
                onColorSelect: (color) => {
                    const newColors = this.state.colors.concat(color);

                    this.setState({colors: newColors});
                }
            }),
            h(ColorList, {
                colors: this.state.colors,
                onSelectColor: (color) => {
                },
                onRemoveColor: (color) => {
                    const newColors = this.state.colors.filter((currentColor) => currentColor != color);

                    this.setState({colors: newColors});
                }
            })
        ]);
    }
});

const Colorful = React.createClass({
    render () {
        return h(ColorApp, {
            colors: [
                {value: '#1abc9c', label: 'Turquoise'},
                {value: '#16a085', label: 'Green sea'},
                {value: '#2ecc71', label: 'Emerald'},
                {value: '#27ae60', label: 'Nephritis'},
                {value: '#3498db', label: 'Peter river'},
                {value: '#2980b9', label: 'Belize hole'},
                {value: '#9b59b6', label: 'Amethyst'},
                {value: '#8e44ad', label: 'Wisteria'},
                {value: '#34495e', label: 'Wet asphalt'},
                {value: '#2c3e50', label: 'Midnight blue'},
                {value: '#f1c40f', label: 'Sun flower'},
                {value: '#f39c12', label: 'Orange'},
                {value: '#e67e22', label: 'Carrot'},
                {value: '#d35400', label: 'Pumpkin'},
                {value: '#e74c3c', label: 'Alizarin'},
                {value: '#c0392b', label: 'Pomegranate'},
                {value: '#ecf0f1', label: 'Clouds'},
                {value: '#bdc3c7', label: 'Silver'},
                {value: '#95a5a6', label: 'Concrete'},
                {value: '#7f8c8d', label: 'Asbestos'}
            ]
        });
    }
});


module.exports = Colorful;
