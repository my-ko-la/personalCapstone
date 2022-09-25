const User = require("../models/userModel");
const Cart = require("../models/cartModel");
const AsyncHandler = require("express-async-handler");
const { decodeToken } = require("../middleware/authMiddleware.js");

const getUserCartInfo = async (token) => {
  try {
    //const token = req.headers.cookie.split("=").pop();
    //const token = req.headers.cookie.split("=").pop();
    const decoded = decodeToken(token);

    const user = await User.findById(decoded.id);
    const cart = await Cart.findOne({ user: user._id })
      .populate({
        path: "items",
      })
      .populate({ path: "user" });

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
  let token = req.headers.cookie.split("=").pop();
  const { cart } = await getUserCartInfo(token);

  const itemId = req.params.id;

  try {
    if (cart.items.includes(itemId)) {
      cart.items.itemId.amount++;
    } else {
      cart.items.push(itemId);
    }
    cart.save().then(res.status(200).json(cart));
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// @desc    Remove all items from cart
// @route   DELETE /cart/remove
// @access  Private/Protected (Token)

const voidCart = AsyncHandler(async (req, res) => {
  let token = req.headers.cookie.split("=").pop();
  const { user, cart } = await getUserCartInfo(token);

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
  let token = req.headers.cookie.split("=").pop();
  const { user, cart } = await getUserCartInfo(token);

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
    let token = req.headers.cookie.split("=").pop();
    const { user, cart } = await getUserCartInfo(token);

    cart.save().then(res.status(201).json(cart));
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
