const express = require("express");
const databaseconnection = require("./connectors/dbconnection");
const app = express();

// We need to tell our server that we will receive data in form of json from frontend by writing this code
app.use(express.json());

// 1. Create Operation
// request for saving/creating new entry in database
// As we create new document, based on request and data coming from backend
// We create new entry in database by data send from frontend or postman so POST method is used
app.post("/signup", (req, res) => {
  try {
    const comingData = req.body;
    console.log(comingData);

    // code for creating new data

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
