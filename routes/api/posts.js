const express = require("express");
const { route } = require(".");
const router = express.Router();
const Post = require("../../models/Posts");
const uuid = require("uuid");

// @route GET api/posts
// @description gets all blogposts
router.get("/", (req, res) => {
  Post.find();
  try {
    (posts) => res.json(posts);
  } catch {
    (err) => res.status(400).json("Error: " + err);
  }
});

router.post("/create", async (req, res) => {
  const { title, content, author, slug } = req.body;
  //@aroesec do I need hashing or an ID??
  //need to generate image for
  const newPost = new Post({
    title,
    content,
    author,
    slug,
  });
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
