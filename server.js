const express = require('express');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const app = express();
//Convert Hex to RGB functions
function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)};
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)};
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)};
function cutHex(h) {return (h.charAt(0)==="#") ? h.substring(1,7):h};

app.set("port", process.env.PORT || 5000);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/api/colormind', (req, res) => {
  // recieve query string and split
  let hexColors = req.query.colors.split(',');
  let hexToRGB = [];
  // convert to RGB from Hex
  for (let i = 0; i < hexColors.length; i++) {
    let R = hexToR(hexColors[i]);
    let G = hexToG(hexColors[i]);
    let B = hexToB(hexColors[i]);
    hexToRGB.push([ R, G , B ]);
  }
  // if greater than length 5 slice
  if ( hexToRGB.length > 5 ) {
    hexToRGB = hexToRGB.slice(1, 6);
  }
  // if less than 5 push 'N'
  if (hexToRGB.length < 5) {
    for (let i = hexToRGB.length; i < 5 ; i++) {
      hexToRGB.push('N');
    }
  }

  const url = "http://colormind.io/api/";
  const data = {
  	model : "default",
  	input : hexToRGB
  }

  var http = new XMLHttpRequest();
  // The onreadystatechange property specifies a function to be
  // executed every time the status of the XMLHttpRequest object changes
  http.onreadystatechange = function() {
    // The response is ready
  	if(http.readyState == 4 && http.status == 200) {
  		var palette = JSON.parse(http.responseText).result;
  		res.json(palette);
  	}
  }

  http.open("POST", url, true);
  http.send(JSON.stringify(data));
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
