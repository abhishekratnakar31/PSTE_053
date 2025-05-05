let mongoose = require("mongoose");
let objectid = mongoose.Schema.objectid;
let  productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    category: {
        type: String,
        enum: ["Electronics","Computers","MobilePhones","Clothes"],
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    discount: {
        type: string,
        required: true
        
    }


});