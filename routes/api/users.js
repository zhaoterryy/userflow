const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const config = require("config");
const Bcrypt = require("bcryptjs");

// @route POST api/users
// @description Register User
// @access Public
// @aroesec TODO may need to add more password complexity with custom rules
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 12 or more characters"
    ).isLength({ min: 12 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists" }] }); //if user exists return errors array
      }
      user = new User({
        name,
        email,
        password,
      });

      const salt = await Bcrypt.genSalt(10);
      user.password = await Bcrypt.hash(password, salt); //hashes password with salt generated above
      await user.save();

      const jwtPayload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        //creates a jwt with user.id, config secret
        jwtPayload,
        config.get("jwtSecret"),
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
