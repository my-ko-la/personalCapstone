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
      ).toString(),
    });
    res.status(201).send("User created");
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).send("Wrong username or password");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.hashedPassword,
      process.env.SEC_HSH
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).send("Wrong password");

    const { password, ...userInfo } = user._doc; // to avoid mongo being weird ; look into this

    res.status(200).json(userInfo);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
