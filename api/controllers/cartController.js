const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Cart = require("../models/cart");
const AsyncHandler = require("express-async-handler");
const { decodeToken } = require("../middleware/authMiddleware.js");

const getUserCartInfo = async (req, res) => {
  try {
    // authorizaztion header for Bearer Token
    const token = req.headers.authorization.split(" ")[1];
    const decoded = decodeToken(token);

    const user = await User.findById(decoded.id);
    const cart = await Cart.findOne({ user: user._id });

    return { user, cart };
  } catch (error) {
    console.log("getUserCartInfo error", error);
  }
};

// @desc    Add product to cart
// @route   POST /users/:id/cart/add
// @access  Private/Protected

const addItemToCart = AsyncHandler(async (req, res) => {
  // get user info from cookie
  const { user, cart } = await getUserCartInfo(req, res);

  const itemExists = cart.items.find(req.body.product);

  if (itemExists) {
    cart.items.product.amount++;
  } else {
    cart.items.push(req.body.product);
  }

  cart.save().then((cart) => res.status(200).json(cart).json(user));
});

// @desc    Decrement item from cart
// @route   PUT /cart/modify/
// @access  Private/Protected

const decrementFromCart = AsyncHandler(async (req, res) => {
  // get user info from cookie
  const { cart } = await getUserCartInfo(req, res);

  // check if item already exists in cart
  const itemExists = cart.items.find(
    (item) => items.product == req.body.product
  );

  if (itemExists) {
    cart.items.product.amout++;
  } else {
    cart.items.push(req.body);
  }
});

// @desc    Remove item from cart
// @route   DELETE /cart/remove
// @access  Private/Protected

// @desc    Get cart items
// @route   GET /carts/me/
// @access  Private/Protected (Token)

const getCart = AsyncHandler(async (req, res) => {
  try {
    const { cart } = await getUserCartInfo(req, res);

    return res.status(201).json(cart);
  } catch (err) {
    res.status(400).send(err);
  }
});

// @desc    Helper function to get cart

module.exports = { getCart, addItemToCart, decrementFromCart };
