const express = require("express");
const router = express.Router();

const { getCart, addItemToCart } = require("../controllers/cartController");

router.get("/me", getCart);
router.post("/toCart", addItemToCart);

module.exports = router;
