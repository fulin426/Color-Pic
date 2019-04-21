const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwtSecret = require('../config/keys').jwtSecret;
const jwt = require('jsonwebtoken');

// Users Model
const User = require('../models/usermodel');

// @route GET /api/users
// Register new user
router.post('/', (req, res) => {
  const { email, password } = req.body;
  // Simple Validation
  if(!email || !password) {
    return res.status(400).json('Please enter all fields');
  }
  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json('User already exists');
      const newUser = new User({
        email,
        password
      });
      // Create salt and hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              // sign with user id
              jwt.sign(
                { id: user.id },
                jwtSecret,
                { expiresIn: 3600 },
                (err, token) => {
                  console.log(err);
                  if(err) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      email: user.email
                    }
                  });
                });
              }
            )
        })
      })
    })
});

module.exports = router;
