const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./router/product.router");
const app = express();
app.use(bodyParser.json());
app.use("/product", productRouter);


app.use(bodyParser.json());

app.listen(8080, (err) => {
  if (err) 
    console.log("err", err);
  console.log("server is running on prt 8080");
});
