const mongoose = require("mongoose");

const contentschema = new mongoose.Schema({
  category: String,
  headline: String,
  description: String,
  type: String,
});

const contentModel = mongoose.model("content", contentschema);

module.exports = contentModel;
