const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/mini-project");

const userSchema = new Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  profilePic: { type: String, default: "dp.jpg" },
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
