const ProductModelSchema =require('../models/productmodel')
const fs=require('fs')
const productmodel = require('../models/productmodel')
// const productModel = require('../models/productModel')


const ProductData=async (req,res )=>{
try {
    const{ProductName,ProductPrice,LogoMaterial,EnterDescription,selectSize,ProductQuantity,color}=req.body
    let ImageDetails=[]
    let Size=selectSize.split(',')
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
        ProductName,ProductPrice,EnterDescription,selectSize:Size,ProductQuantity,LogoMaterial,color,
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


 const getProductData= async(req,res)=>{
    try {
        
        const DocumentToGet= await ProductModelSchema.find()
        res.json({
            message: 'All Documents Found',
            Data: true,
            Result:DocumentToGet
        })
    } catch (error) {
        res.json({
            message: error.message,
            Result: null,
            Data: false
          })
    }
}


const getProductById = async(req,res)=>{
    try {
         const Id = req.params._id;  
        const documentToFind = await ProductModelSchema.findOne(
            {_id:Id}, //condition
            // {status:1 , ProductPrice:1} //projection (projection means only show this  )
        )
        res.json({
          message: 'Data found successfully',
          Data:true,
          Result:documentToFind
        })
    } catch (error) {
        res.json({
            message:error.message,
            Result:null,
            Data:false
        })
    }
}

module.exports={ProductData,getProductData,getProductById}