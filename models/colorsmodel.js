
const mongoose = require('mongoose');

const ColorsSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      max: 120
    },
    colors: {
      type: Array,
      required: true
    },
});

// Export the model
const colorPalette = mongoose.model('colorPalette', ColorsSchema);

module.exports = colorPalette;
