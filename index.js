const express = require("express");
const app = express();
const databaseconnection = require("./connectors/dbconnection");
const CONTENT_MODEL = require("./models/Content");

app.use(express.json());

// content will come from frontend to backend so POST method is used
app.post("/api/save", async (req, res) => {
  try {
    const { category, headline, description, type } = req.body;
    const newContent = new CONTENT_MODEL({
      category,
      headline,
      description,
      type,
    });
    await newContent.save();
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

// getting all news
app.get("/api/news", async (req, res) => {
  try {
    const newsdata = await CONTENT_MODEL.find({ type: "news" }).sort({
      _id: -1,
    });
    return res.json({ data: newsdata, success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

// getting all quotes
app.get("/api/quotes", async (req, res) => {
  try {
    const quotesdata = await CONTENT_MODEL.find({ type: "quotes" }).sort({
      _id: -1,
    });
    return res.json({ data: quotesdata, success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

// getting all jokes
app.get("/api/jokes", async (req, res) => {
  try {
    const jokesdata = await CONTENT_MODEL.find({ type: "jokes" }).sort({
      _id: -1,
    });
    return res.json({ data: jokesdata, success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

databaseconnection().then(() => {
  app.listen(5000, () => console.log("Server is running at port 5000"));
});
