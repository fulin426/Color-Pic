const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwtSecret = require('../config/keys').jwtSecret;
const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');

// Users Model
const User = require('../models/usermodel');

// @route GET /api/auth
// Authorize user
router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Simple Validation
  if(!email|| !password) {
    return res.status(400).json('Please enter all fields')
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if(!user) return res.status(400).json('User Does not exist');

      // Validate password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch) return res.status(400).json('Invalid credentials');

          jwt.sign(
            { id: user.id },
            jwtSecret,
            { expiresIn: 7200 }, // Expires in 2hrs
            (err, token) => {
              if(err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  email: user.email
                }
              });
            }
          )
        })
    })
});

// @route GET /api/auth/users
// Get user data
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

module.exports = router;
