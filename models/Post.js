const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  dob: String,
  email: String,
  password: String,
});

const createdModal = mongoose.model("post", userSchema);
module.exports = createdModal;
