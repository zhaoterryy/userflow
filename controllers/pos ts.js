import Post from '../models/BlogPosts';
import { v4 as uuidv4 } from 'uuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';
const { check, validationResult } = require('express-validator')




export function addPost(req, res) {
    if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
      res.status(403).end();
    }
  
    const newPost = new Post(req.body.post);
  
    // Let's sanitize inputs
    newPost.title = sanitizeHtml(newPost.title);
    newPost.name = sanitizeHtml(newPost.name);
    newPost.content = sanitizeHtml(newPost.content);
  
    newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
    newPost.uuidv4 = uuidv4();
    newPost.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ post: saved });
    });
  }