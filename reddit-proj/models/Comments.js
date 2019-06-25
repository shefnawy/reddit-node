const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  body: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Post", commentsSchema);
