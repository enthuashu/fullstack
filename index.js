const express = require("express");
const app = express();

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

// writing atleast 5 requests and send their postman responses and code ss

//code for creating server
let port = 5000;
app.listen(port, () => console.log(`Server is running at ${port}`));
