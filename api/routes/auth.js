const router = require("express").Router();
const User = require("../models/user");
const CryptoJS = require("crypto-js");

router.post("/register", async (req, res) => {
  try {
    const user = await User.create({
      ...req.body,
      hashedPassword: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SEC_HSH
      ),
    });
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
