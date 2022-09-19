const User = require("../models/userModel");
const Cart = require("../models/cartModel");
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
// @route   PUT /cart/add/:id
// @access  Private/Protected (Token)

const addItemToCart = AsyncHandler(async (req, res) => {
  // get user info from cookie
  const { user, cart } = await getUserCartInfo(req, res);

  try {
    cart.items.push(req.params.id);
    cart.save().then(res.status(200).json(cart));
  } catch (err) {
    res.status(400).json(err);
  }
});

// @desc    Remove all items from cart
// @route   DELETE /cart/remove
// @access  Private/Protected (Token)

const voidCart = AsyncHandler(async (req, res) => {
  const { cart } = await getUserCartInfo(req, res);

  try {
    cart.items.splice(0, cart.items.length);
    cart.save().then(res.status(200).json(cart));
  } catch (err) {
    console.log(err);
    res.status(400);
  }
});

// @desc    Remove item from cart
// @route   PUT /cart/remove/:id
// @access  Private/Protected (Token)

const removeItemFromCart = AsyncHandler(async (req, res) => {
  const { cart } = await getUserCartInfo(req, res);

  try {
    const elementToDelete = cart.items.indexOf(req.params.id);
    cart.items.splice(elementToDelete, 1);
    cart.save().then(res.status(200).json(cart));
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// @desc    Get cart items
// @route   GET /cart/me/
// @access  Private/Protected (Token)

const getCart = AsyncHandler(async (req, res) => {
  try {
    const { cart } = await getUserCartInfo(req, res);

    return res.status(201).json(cart);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = {
  getCart,
  getUserCartInfo,
  addItemToCart,
  voidCart,
  removeItemFromCart,
};
