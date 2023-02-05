const ProductModelSchema =require('../models/productmodel')
const fs=require('fs')
// const productModel = require('../models/productModel')


const ProductData=async (req,res )=>{
try {
    const{ProductName,ProductPrice,Category,LogoMaterial,description,size,ProductQuantity,color}=req.body
    let ImageDetails=[]
    let Size=size.split(',')
    req.files.forEach(element => {
        const {filename,orignalname,mimetype}=element
        ImageDetails.push({
            ImageUrl:`assets/Product/${ProductName}/${filename}`,
            ImageName:orignalname,
            ImageMimeType:mimetype
        })
    });
    // creating collection in database 
    const documentoCraete=  new ProductModelSchema({
        ProductName,ProductPrice,description,Category,Size:Size,ProductQuantity,LogoMaterial,color,
        ImageDetail:ImageDetails
    })
    // if data is saved this will be the response 
    const documentoSave=await documentoCraete.save();
    res.json({
        message:"Data SentSuccessful ",
        data:true,
        Body:documentoSave
    })
} catch (error) {
  res.json({
    message: error.message,
    Result: null,
    Data: false
  })
}
}

module.exports={ProductData}