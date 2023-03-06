const express = require('express');
const Router =  express.Router();
const {ProductData,getProductData,getProductById,SoftDelete}=require('../controllers/productManagemnetcontroller');

// calling my middleware and utilss
const {UploadProductImage} =require('../middlewares/Firstguard')

//Start Block Calling and Initializing Middlewares

//Start Block Calling and Initializing Controlers

//Start Block Calling and Initializing Controlers

Router.post('/ProductData',UploadProductImage.array('images',20),ProductData);
Router.get('/getProductData', getProductData);
Router.get('/getProductById/:_id', getProductById);
Router.delete('/SoftDelete/:_id',SoftDelete)


module.exports = Router;
