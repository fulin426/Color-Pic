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
  const { username, email, password } = req.body;

  // Simple Validation
  if(!username || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' })
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({ msg: 'User already exists'});

      const newUser = new User({
        username,
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
                  if(err) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      username: user.username,
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
