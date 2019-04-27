const jwt = require("jsonwebtoken");
const jwtSecret = require("../../config/keys").jwtSecret;

// Add middleware as second parameter in endpoint for private routes
function auth(req, res, next) {
  const token = req.header("x-auth-token");

  // Check for token
  if (!token) {
    // Unauthorized status if no token
    return res.status(401).json("No token, authorization denied");
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, jwtSecret);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json("Token is not valid");
  }
}

module.exports = auth;
