const express = require("express");
const router = express.Router();
const auth = require("./middleware/auth");
const ColorPalette = require("../models/colorsmodel");

// @route GET /api/colors
// get all colors
router.get("/:email", (req, res) => {
  ColorPalette.find({ email: req.params.email })
    .then(color => res.json(color))
    .catch(err => res.send(err));
});

// @route POST /api/colors
// create a new color palette
router.post("/", auth, (req, res) => {
  const newColorPalette = new ColorPalette({
    url: req.body.url,
    email: req.body.email,
    title: req.body.title,
    colors: req.body.colors
  });
  newColorPalette
    .save()
    .then(colors => res.json(colors))
    .catch(err => res.send(err));
});

//@route Update /api/colors/:id
//Update a color palette
router.put("/:id", auth, (req, res) => {
  const update = {
    title: req.body.title,
    colors: req.body.colors
  };

  ColorPalette.findByIdAndUpdate(req.params.id, update)
    .then(colors => res.json({ success: true, colors }))
    .catch(err => res.send(err));
});

//@route DELETE /api/colors/:id
//Delete a color palette
router.delete("/:id", auth, (req, res) => {
  ColorPalette.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.json({ success: false }));
});

module.exports = router;
