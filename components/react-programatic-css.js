const h = require('react-hyperscript');

import React from 'react';

const styles = {
    container: {},
    input: {margin: '1em'}
};

function contrastingColor (color)
{
    return (luma(color) >= 165) ? '#000000' : '#ffffff';
}
function luma (color) // color can be a hx string or an array of RGB values 0-255
{
    const rgb = (typeof color === 'string') ? hexToRGBArray(color.replace('#', '')) : color;
    return (0.2126 * rgb[0]) + (0.7152 * rgb[1]) + (0.0722 * rgb[2]); // SMPTE C, Rec. 709 weightings
}
function hexToRGBArray (color)
{
    if (color.length === 3)
        color = color.charAt(0) + color.charAt(0) + color.charAt(1) + color.charAt(1) + color.charAt(2) + color.charAt(2);
    else if (color.length !== 6)
        throw ('Invalid hex color: ' + color);
    const rgb = [];
    for (let i = 0; i <= 2; i++)
        rgb[i] = parseInt(color.substr(i * 2, 2), 16);
    return rgb;
}


function hexToComplimentary (hex) {
    // Convert hex to rgb
    // Credit to Denis http://stackoverflow.com/a/36253499/4939630
    let rgb = 'rgb(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length / 3 + '})', 'g')).map(function (l) { return parseInt(hex.length % 2 ? l + l : l, 16); }).join(',') + ')';

    // Get array of RGB values
    rgb = rgb.replace(/[^\d,]/g, '').split(',');

    let r = rgb[0], g = rgb[1], b = rgb[2];

    // Convert RGB to HSL
    // Adapted from answer by 0x000f http://stackoverflow.com/a/34946092/4939630
    r /= 255.0;
    g /= 255.0;
    b /= 255.0;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2.0;

    if (max == min) {
        h = s = 0;  // achromatic
    } else {
        const d = max - min;
        s = (l > 0.5 ? d / (2.0 - max - min) : d / (max + min));

        if (max == r && g >= b) {
            h = 1.0472 * (g - b) / d;
        } else if (max == r && g < b) {
            h = 1.0472 * (g - b) / d + 6.2832;
        } else if (max == g) {
            h = 1.0472 * (b - r) / d + 2.0944;
        } else if (max == b) {
            h = 1.0472 * (r - g) / d + 4.1888;
        }
    }

    h = h / 6.2832 * 360.0 + 0;

    // Shift hue to opposite side of wheel and convert to [0-1] value
    h += 180;
    if (h > 360) { h -= 360; }
    h /= 360;

    // Convert h s and l values into r g and b values
    // Adapted from answer by Mohsen http://stackoverflow.com/a/9493060/4939630
    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = function hue2rgb (p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);

    // Convert r b and g values to hex
    rgb = b | (g << 8) | (r << 16);
    return '#' + (0x1000000 | rgb).toString(16).substring(1);
}

const computeComplementaryColor = contrastingColor;

const ColorCorrectText = ({text, style}) => {
    return h('span', {
        style: {
            ...style,
            color: computeComplementaryColor(style.background)
        }
    }, text);
};


const ProgramaticCSS = React.createClass({
    getInitialState () {
        return {hexCode: '#fff'};
    },

    render () {
        const {hexCode} = this.state;

        return h('div', styles.container, [
            h('input', {
                style: styles.input,
                type: 'text',
                value: hexCode,
                placeholder: '#000 or #fff for great effect',
                onChange: ({target: {value}}) => {
                    const hexCode = value;

                    this.setState({hexCode});
                }
            }),
            h(ColorCorrectText, {text: hexCode, style: {background: hexCode}})
        ]);
    }
});


export default ProgramaticCSS;
