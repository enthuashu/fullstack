const mongoose = require("mongoose");

// code for connecting database (time taking)
const databaseconnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myfirstdatabase");
    console.log("Database successfully connected....");
  } catch (error) {
    console.log(error);
  }
};

module.exports = databaseconnection;
