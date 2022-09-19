const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const User = require("../models/userModel");
const AsyncHandler = require("express-async-handler");
const Cart = require("../models/cartModel");

// @desc    Register a User
// @route   POST /users/register
// @access  Public
const registerUser = AsyncHandler(async (req, res) => {
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

      const cart = await Cart.create({ user: user._id });

      const { hashedPassword, ...userWithoutPassword } = user._doc;
      const cartData = cart._doc;

      const returnObj = {
        ...userWithoutPassword,
        ...cartData,
      };

      res.status(201).json(returnObj);
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    res.status(400);
    throw new Error("User already exists");
  }
});

// @desc    Register a User
// @route   POST /users/login
// @access  Public
const loginUser = AsyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  !user && res.status(401).send("Wrong username or password");

  const hashedPassword = CryptoJS.AES.decrypt(
    user.hashedPassword,
    process.env.SEC_HSH
  );
  const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

  originalPassword !== req.body.password &&
    res.status(401).send("Wrong password");

  user.token = makeToken(user._id);
  const { password, ...userInfo } = user._doc; // to avoid mongo being weird ; look into this

  if (user) {
    user.save().then(
      res
        .status(200)
        .setHeader("Authorization", `Bearer ${user.token}`)
        .cookie("auth-t", `${user.token}`, {
          secure: true,
          maxAge: 1000 * 60 * 60 * 24 * 7,
        })
        //.setHeader("Access-Control-Allow-Credentials", "true")
        .json({ ...userInfo, token: user.token })
    );
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Get user
// @route   GET /users/me
// @access  Private/Protected
const getUser = AsyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.user.email });
  res.status(200).json(user);
});

function makeToken(id) {
  return jwt.sign({ id }, process.env.SEC_JWT, { expiresIn: "7d" });
}

module.exports = { registerUser, loginUser, getUser };
