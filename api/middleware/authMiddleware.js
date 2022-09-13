const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protect = async (req, res, next) => {
  try {
    const token = req.token;
    const decodedData = jwt.verify(token, process.env.SEC_JWT);
    req.user = await User.findById(decodedData.id).select("-password");
    next();
  } catch (error) {
    console.log(error);
    res.status(401);
    throw new Error("Not authorized");
  }
};

module.exports = { protect };
