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
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments"
    }
  ]
});

module.exports = mongoose.model("Post", postSchema);
