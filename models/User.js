const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // this is used when this field is neccessary while submitting entry
  },
  age: {
    type: Number,
    default: 55, // this is used to set default value if we don't get input from frontend
  },
  dob: {
    type: String,
  },
  email: {
    type: String,
    unique: true, // this is used when we do want unique entries e.g. IG=> Username already exists
  },
  password: {
    type: String,
  },
});

const createdModal = mongoose.model("user", userSchema);
module.exports = createdModal;
