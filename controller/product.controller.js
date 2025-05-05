const { error } = require("console");

const product=[
    {
    name:"led",
    category:"electronics",
    price:"20000",
    discount:"20%"},

    {
        name:"pants",
        category:"clothes",
        price:"1000",
        discount:"10%"},
    {
        name:"speakers",
        category:"electronics",
        price:"22000",
        discount:"20%"}
]


let getallproducts=((req,res)=>{
    res.json({product}).status(200)
});



// let addproduct=((req,res)=>{
//       try {
//         let body = req.body;
//         let error= validateproduct(body);
//         if(error){
//             return res.json({ success: true, message: "product is required" }).status(400);
//         }

//         products.push(body);
//         res.status(200).json({ success: true, meesage: "Products added " });
//       } catch (err) {
//         res.status(500).json({ success: false, message: "Internal server error" });
//       }
  
// });

// let deleteproduct=((req,res)=>{
//     let productId=req.params.id;
//     let product=products.find((p)=>{
//         return p.id==productId
//     })
//     if(!product){
//         return res.status(404).json({success:false,message:"product not found"})
//     }
//     products=products.filter((p)=>{
//         return p.id!=productId
//     })
//     res.status(200).json({success:true,message:"Product deleted",data:product})
// })


// let validateproduct= (product)=>{
//     if(!product) {
//         throw new Error("Please pass a valid product")
//     }
//     if(!product.name || product.category || product.price || product.discount){
//         return new Error("Product is req")
//     }
// }


module.exports={getallproducts, addproduct, deleteproduct, validateproduct};

