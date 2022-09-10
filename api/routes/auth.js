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
    res.status(201).json(user);
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

    user.isLoggedIn = true;
    const { password, ...userInfo } = user._doc; // to avoid mongo being weird ; look into this

    user.save().then(res.status(200).json(userInfo));
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/logout", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const logoutUser = { isLoggedIn: false };
    const confirmed = await user.updateOne(logoutUser);
    confirmed && res.status(200).json("User logged out");
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/user", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    res.status(200).json(user);
  } catch (err) {
    return err;
  }
});

module.exports = router;
