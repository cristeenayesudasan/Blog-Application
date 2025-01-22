const mongoose = require('mongoose')
const blogSchema = mongoose.Schema({
    title : String,
    description : String,
    imageurl : String
})
const blogModel = mongoose.model('blog',blogSchema);
module.exports = blogModel;