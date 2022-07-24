const express = require("express");
const databaseconnection = require("./connectors/dbconnection");
const app = express();
//When you want to import any file from your root folder you put "./" and if you want to import something outside of root folder you put "../"
const USER_MODEL = require("./models/User");

// We need to tell our server that we will receive data in form of json from frontend by writing this code
app.use(express.json());

// 1. Create Operation
// request for saving/creating new entry in database
// As we create new document, based on request and data coming from backend
// We create new entry in database by data send from frontend or postman so POST method is used
app.post("/signup", async (req, res) => {
  try {
    const comingData = req.body;
    // code for creating new data
    const newUser = new USER_MODEL({
      name: comingData.username,
      age: comingData.userage,
      email: comingData.useremail,
      password: comingData.userpass,
      dob: comingData.userdob,
    });
    await newUser.save();
    res.json({ success: true, message: "New data created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});

// writing atleast 5 requests and send their postman responses and code ss
databaseconnection();
//code for creating server
let port = 5000;
app.listen(port, () => console.log(`Server is running at ${port}`));
