const auth = require("../../middleware/auth");
const express = require("express");
const { model } = require("../../models/User");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  req.logout();
  res.redirect("./dashboard.js"); //if user logs out this will send them back to the dashboard
});

module.exports = router;
