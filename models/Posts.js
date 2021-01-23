const slugify = require('slugify')
const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  author: { type: String, required: true },
  comments: [String],
  title: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: Buffer, required: true },
  date: { type: Date, default: Date.now, required: true },
});

 
const Post = mongoose.model("blog", BlogSchema);

module.exports = Post;
