const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productRouter = require("./product.router");

const app = express();

app.use(bodyParser.json());
app.use("/product", productRouter);

let mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/?readPreference=primary';
mongoose.connect(mongoUrl)
  .then(() => console.log('Connected to Database'))
  .catch(err => console.log('DB Connection Error:', err));

app.listen(8080, (err) => {
  if (err) console.log("Error:", err);
  console.log("Server is running on port 8080");
});