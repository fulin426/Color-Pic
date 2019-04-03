const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const ColorPalette = require('./routes/colorPalette');
const colormindAPI = require('./routes/colormindAPI');

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected!'))
  .catch(error => console.log('Not able to connect...',error));

// uses Heroku Env or Port 5000
app.set("port", process.env.PORT || 5000);

// Use Route for colormind API
app.use('/api/colormind', colormindAPI);

// Use Route for user Colors API
app.use('/api/colors', ColorPalette);

// Express only serves static assets in productio
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
