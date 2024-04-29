const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  username : {
    type: String,
    required: true
  },
  created_by : {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  link: {
    type: String
  },
  reactions: {
    type: Number,
    default: 0
  },
  time: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
