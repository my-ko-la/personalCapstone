const express = require("express");
const router = express.Router();

const {
  getCart,
  addItemToCart,
  updateCart,
} = require("../controllers/cartController");

router.get("/me", getCart);
router.post("/addToCart", addItemToCart);
router.put("/updateCart", updateCart);

module.exports = router;
