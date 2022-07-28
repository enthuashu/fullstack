const mongoose = require("mongoose");

const postschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
      required: true,
    },
    comments: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
    },
  },
  { timestamps: true }
);

const postmodel = mongoose.model("post", postschema);
module.exports = postmodel;
