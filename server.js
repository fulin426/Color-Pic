const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const colormindAPI = require('./routes/colormindAPI');

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected!'))
  .catch(error => console.log('Not able to connect...',error));

// uses Heroku Env or Port 5000
app.set("port", process.env.PORT || 5000);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use Route for colormind API
app.use('/api/colormind', colormindAPI);

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
