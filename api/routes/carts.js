const express = require("express");
const router = express.Router();

const {
  getCart,
  addItemToCart,
  voidCart,
  removeItemFromCart,
} = require("../controllers/cartController");

router.get("/me", getCart);
router.put("/add/:id", addItemToCart);
router.delete("/voidCart", voidCart);
router.put("/remove/:id", removeItemFromCart);

module.exports = router;
