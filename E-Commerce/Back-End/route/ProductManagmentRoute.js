const express = require('express');
const Router =  express.Router();
const {CreateProduct}=require('../controllers/productManagemnetcontroller');

// calling my middleware and utilss
const {checkingAuthentication} =require('../middlewares/Firstguard')

//Start Block Calling and Initializing Middlewares

//Start Block Calling and Initializing Controlers

//Start Block Calling and Initializing Controlers

Router.get('/createProduct',checkingAuthentication,CreateProduct);

module.exports = Router;