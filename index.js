


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productRouter = require("./router/product.router");


const app = express();
app.use(bodyParser.json());
app.use("/product", productRouter);


let mongoUrl = process.env.MONGO_URL || " mongodb://127.0.0.1:27017/mernevaldb";
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(' MongoDB connection error:', err));

app.listen(8080, (err) => {
    if (err) console.log("err", err);
    console.log("Server is running on port 8080");
});