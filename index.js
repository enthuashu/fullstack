const express = require("express");
const databaseconnection = require("./connectors/dbconnection");
const app = express();
//When you want to import any file from your root folder you put "./" and if you want to import something outside of root folder you put "../"
const USER_MODEL = require("./models/User");
const bcrypt = require("bcryptjs");

// We need to tell our server that we will receive data in form of json from frontend by writing this code
app.use(express.json());

// 1. Create Operation
// request for saving/creating new entry in database
// As we create new document, based on request and data coming from backend
// We create new entry in database by data send from frontend or postman so POST method is used
app.post("/shortcut", async (req, res) => {
  try {
    // Shortcut => variables should be same at model and frontend
    const { name, age, dob, email, password } = req.body;
    // this mean
    // name=req.body.name
    // age=req.body.age,
    // email=req.body.email   This is called Object destructuring
    const newEntry = new USER_MODEL({
      name, // this means name:name
      age, // age:age
      dob,
      email,
      password,
    });

    //If in any object, the key value pair is same, then we can write only one
    await newEntry.save();
    res.json({ success: true, message: "New data created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});

// There is no relation of encryption with model (we describe password as string)
app.post("/signup", async (req, res) => {
  try {
    const { name, age, dob, email, password } = req.body;
    // const newEntry = new USER_MODEL({ name:name, age:age, dob:dob, email:email, password:password }); is same as
    // We encrypt data before saving

    let encryptedpassword = await bcrypt.hash(password, 12); // code for encrypting

    const newEntry = new USER_MODEL({
      name,
      age,
      dob,
      email,
      password: encryptedpassword,
    });
    await newEntry.save();
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
