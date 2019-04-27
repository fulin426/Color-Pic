const mongoose = require("mongoose");

const ColorsSchema = new mongoose.Schema({
  email: {
    type: String
  },
  url: {
    type: String
  },
  title: {
    type: String,
    required: true,
    max: 100
  },
  colors: {
    type: Array,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

// Export the model
const colorPalette = mongoose.model("colorPalette", ColorsSchema);

module.exports = colorPalette;
