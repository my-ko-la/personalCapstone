/*
 YOU MIGHT NEED THIS FOR LATER, BUT IT'S NOT NECESSARY FOR THIS PROJECT AT THE MOMENT
*/

const User = require("../models/author");
const async = require("async");
const Order = require("../models/order");
const { body, validationResult } = require("express-validator");

exports.user_list = function (req, res, next) {
  User.find()
    .sort([["fname", "ascending"]])
    .exec(function (err, list_users) {
      if (err) {
        return next(err);
      }
      res.render("user_list", { title: "User List", user_list: list_users });
    });
};

exports.user_detail = function (req, res, next) {
  async.parallel(
    {
      user: function (callback) {
        User.findById(req.params.id).exec(callback);
      },
      user_orders: function (callback) {
        Order.find({ author: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.user == null) {
        const err = new Error("User not found");
        err.status = 404;
        return next(err);
      }
      res.render("user_detail", {
        title: "User Detail",
        user: results.user,
        user_orders: results.user_orders,
      });
    }
  );
};
