const express = require("express");
const app = express();

// We need to tell our server that we will receive data in form of json from frontend by writing this code
app.use(express.json());

// when we send data from frontend to backend in the form of payload
app.post("/signup", (req, res) => {
  try {
    // here we receive data from frontend
    // we get payload data of frontend from "req.body"
    console.log(req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

// writing first request for frontend // writing first API // writing an api
// api.get(route,callback)
app.get("/feed", (req, res) => {
  try {
    res.json({ success: true, data: "All the feed data" });
  } catch (error) {
    res.json({ success: false });
  }
});

app.get("/messages", (req, res) => {
  try {
    res.json({ success: true, data: "All the messages" });
  } catch (error) {
    res.json({ success: false });
  }
});

// api template
app.get("route", (req, res) => {
  try {
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false });
  }
});

// profile information using params// : is used while writing api
app.get("/profileinfo/:id", (req, res) => {
  try {
    let name = req.params.id; // this is the parameter passed at route

    res.json({
      success: true,
      data: `Profile information of ${name} whose dob is ${req.query.dob}`,
    });
  } catch (error) {
    res.status(404).json({ success: false });
  }
});

//filtering using queries   // sent after writing ? and assigning variables. No extra thing on backend route
app.get("/filters", (req, res) => {
  try {
    let page = req.query.page;
    let brand = req.query.brand;
    let price = req.query.price;

    res.json({
      success: true,
      data: `Data of page number ${page} of ${brand} and price= ${price} `,
    });
  } catch (error) {
    res.status(404).json({ success: false });
  }
});

app.post("/contactus", (req, res) => {
  try {
    console.log(req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

// writing atleast 5 requests and send their postman responses and code ss

//code for creating servemcr39
let port = 5000;
app.listen(port, () => console.log(`Server is running at ${port}`));
