const express = require('express');
const router = express.Router();
//Colors Model
const ColorPalette = require('../models/colorsmodel');

// @route GET /api/colors
// get all colors
router.get('/', (req, res) => {
  ColorPalette.find()
    .then(color => res.json(color))
});

// @route POST /api/colors
// create a new color palette
router.post('/', (req, res) => {
  const newColorPalette = new ColorPalette({
    title: req.body.title,
    colors: req.body.colors
  });

  newColorPalette.save().then(colors => res.json(colors));
});

//@route DELETE /api/colors/:id
//Delete a color palette
router.delete('/:id', (req, res) => {
  ColorPalette.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
