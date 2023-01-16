const express = require('express');
const Router =  express.Router();
const {ProductData}=require('../controllers/productManagemnetcontroller');

// calling my middleware and utilss
const {UploadProductImage} =require('../middlewares/Firstguard')

//Start Block Calling and Initializing Middlewares

//Start Block Calling and Initializing Controlers

//Start Block Calling and Initializing Controlers

Router.post('/ProductData',UploadProductImage.array('images',20),ProductData);

module.exports = Router;