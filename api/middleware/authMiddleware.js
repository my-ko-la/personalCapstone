const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const AsyncHandler = require("express-async-handler");

const protect = AsyncHandler(async (req, res, next) => {
  let token;
  //console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = await req.headers.cookie.split("=").pop();

      // Verify token
      const decoded = jwt.verify(token, process.env.SEC_JWT);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const decodeToken = (token) => {
  const decoded = jwt.verify(token, process.env.SEC_JWT);

  return decoded;
};

module.exports = { protect, decodeToken };
