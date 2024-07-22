const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  content: String,
    likes: [
        {
        type: Schema.Types.ObjectId,
        ref: "user",
        },
    ],
});

module.exports = mongoose.model("post", postSchema);
