const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const User = require("../models/user");

// @desc    Register a User
// @route   POST /users/register
// @access  Public
const registerUser = async (req, res) => {
  const userAlreadyExists = await User.findOne({ email: req.body.email });
  if (!userAlreadyExists) {
    try {
      const user = await User.create({
        ...req.body,
        hashedPassword: CryptoJS.AES.encrypt(
          req.body.password,
          process.env.SEC_HSH
        ).toString(),
      });
      (user["token"] = makeToken(req.body._id)), res.status(201).json(user);
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    res.status(400).send("User already exists");
  }
};

// @desc    Register a User
// @route   POST /users/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).send("Wrong username or password");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.hashedPassword,
      process.env.SEC_HSH
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).send("Wrong password");

    user.isLoggedIn = true;
    user.token = makeToken(user._id);
    const { password, ...userInfo } = user._doc; // to avoid mongo being weird ; look into this

    user.save().then(res.status(200).json({ ...userInfo, token: user.token }));
  } catch (err) {
    res.status(500).send(err);
  }
};

// @desc    Get user
// @route   GET /users/me
// @access  Public
const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    res.status(200).json(user);
  } catch (err) {
    return err;
  }
};

function makeToken(id) {
  return jwt.sign({ id }, process.env.SEC_JWT, { expiresIn: "7d" });
}

module.exports = { registerUser, loginUser, getUser };
