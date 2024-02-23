const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  post_id: {
    type: Number,
    required: true,
    unique: true
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
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Users"
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
