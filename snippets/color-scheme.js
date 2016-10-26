const ColorCode = {
    ['Food']: '#f1c40f',  // Yellowish
    ['Toiletries']: '#3498db',  // Bluish
    ['Utensils']: '#95a5a6' // Silverish
};

const getItemColor = ({type}) => {
    return ColorCode[type] || '#ecf0f1'; // Default: Whitish
};

module.exports = {getItemColor};
