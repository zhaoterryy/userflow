const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({ 
    name: { type: 'String', required: true },
    title: { type: 'String', required: true },
    content: { type: 'String', required: true },
    slug: { type: 'String', required: true },
    cuid: { type: 'String', required: true },
    dateAdded: { type: 'Date', default: Date.now, required: true },
  });




const BlogPosts = mongoose.model('BlogPosts', BlogSchema)



module.exports = BlogPosts;