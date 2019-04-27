const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db,{ useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(error => console.log("Not able to connect...", error));

// uses Heroku Env or Port 5000
app.set("port", process.env.PORT || 5000);

// Use Route for colormind API
app.use("/api/colormind", require("./routes/colormindAPI"));

// Use Route for user Colors API
app.use("/api/colors", require("./routes/colorPalette"));

// Use Route for User Registration
app.use("/api/users", require("./routes/users"));

// Use Route for User Authorize
app.use("/api/auth", require("./routes/auth"));

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  // redirect all server requests
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
