const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
  dob: String,
});

// tell mongo about model
const savedmodel = mongoose.model("user", userModel);

module.exports = savedmodel;

// models are nothing but just a description about the fields and their type we are going to use in that collection
