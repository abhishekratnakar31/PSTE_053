const express = require('express')
const productrouter= express.Router();

const {getallproducts,addproduct}= require("../controller/product.controller")

productrouter.get('/', getallproducts),
productrouter.post('/',addproduct)

module.export=productrouter;