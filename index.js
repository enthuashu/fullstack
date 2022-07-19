const express = require("express");
const app = express();

// writing first request for frontend // writing first API // writing an api
app.get("/posts", (req, res) => {
  res.json({ success: true, data: "All the posts data" });
});

app.get("/messages", (req, res) => {
  res.json({ success: true, data: "All the messages" });
});

// writing atleast 5 requests and send their postman responses and code ss

//code for creating server
let port = 5000;
app.listen(port, () => console.log(`Server is running at ${port}`));
