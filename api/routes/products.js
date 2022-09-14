const express = require("express");
const router = express.Router();

const { getProductInfo } = require("../controllers/productController");

router.get("/shop", getProductInfo);

module.exports = router;
