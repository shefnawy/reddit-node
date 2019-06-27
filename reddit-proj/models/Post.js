const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  postedAt: {
    type: Date,
    default: Date.now()
  },
  votes: {
    type: Number,
    default: 0
  },
  imageUrl: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  username: {
    type: String,
    required: true
  },
  comments: [
    {
      username: String,
      body: String
    }
  ]
});

module.exports = mongoose.model("Post", postSchema);
