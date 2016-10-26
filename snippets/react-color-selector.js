import Select from 'react-select';

const ColorPicker = Comp({
    render () {
        const {onColorSelect} = this.props;

        return Elem(Select, { // Using a wrapped select element
            options: [ // Some default colors
                {value: '#c0392b', label: 'Pomegranate'},
                {value: '#f1c40f', label: 'Sun Flower'},
                {value: '#1abc9c', label: 'Turquoise'}],
            onChange: ({value, label}) => { onColorSelect(value); } // Call it
        });
    }
});
