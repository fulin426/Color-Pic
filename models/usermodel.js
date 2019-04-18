const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      max: 20
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    register_date: {
      type: Date,
      default: Date.now
    },
});

// Export the model
const User = mongoose.model('user', UserSchema);

module.exports = User;
