const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Cart = require("../models/cartModel");
const Product = require("../models/productModel");
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

// @desc    Provide client with product info
// @route   GET /products
// @access  Public

const getProductInfo = AsyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log("getProductInfo error", error);
  }
});

// @desc    Decrement item from cart
// @route   PUT /cart/modify/
// @access  Private/Protected

// @desc    Remove item from cart
// @route   DELETE /cart/remove
// @access  Private/Protected

// @desc    Get cart items
// @route   GET /carts/me/
// @access  Private/Protected (Token)

// @desc    Helper function to get cart

module.exports = { getProductInfo };
