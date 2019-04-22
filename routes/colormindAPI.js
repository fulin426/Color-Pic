const express = require('express');
const router = express.Router();
const axios = require('axios');

// Convert Hex to RGB functions, some calcs can be moved to utils
function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)};
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)};
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)};
function cutHex(h) {return (h.charAt(0)==="#") ? h.substring(1,7):h};

// Shuffle Array to slightly randomize palette result
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

router.get('/', (req, res) => {
  // recieve query string and split
  let hexColors = req.query.colors.split(',');

  // convert to RGB from Hex
  let hexToRGB = [];
  for (let i = 0; i < hexColors.length; i++) {
    let R = hexToR(hexColors[i]);
    let G = hexToG(hexColors[i]);
    let B = hexToB(hexColors[i]);
    hexToRGB.push([ R, G , B ]);
  }
  // Shuffles which 5 colors are being sent
  hexToRGB = shuffle(hexToRGB);

  // if greater than length 5 slice
  if ( hexToRGB.length > 5 ) {
    hexToRGB = hexToRGB.slice(0, 5);
    // add a 'N' empty slot
    // Api fills in a color if slot empty
    hexToRGB = hexToRGB.concat('N');
  }
  console.log(hexToRGB);
  // if less than 5 push 'N' in remaining slots
  if (hexToRGB.length < 5) {
    for (let i = hexToRGB.length; i < 5 ; i++) {
      hexToRGB.push('N');
    }
  }
  console.log(shuffle(hexToRGB).slice(0,5));
  //only send first 5 colors
  axios.post("http://colormind.io/api/", {
    model : "default",
    input : shuffle(hexToRGB).slice(0,5)
  })
  .then(response => {
    res.json(response.data.result);
  })
  .catch(function (error) {
    console.log(error);
    res.status(400).json({ msg: 'Bad Request or Error from ColorMind'});
  });
});

module.exports = router;
