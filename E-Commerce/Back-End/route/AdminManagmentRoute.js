const express=require('express');
const Router =  express.Router();



//Start Block Calling and Initializing Middlewares

//Start Block Calling and Initializing Middlewares

//Start Block Calling and Initializing Controlers

const {addingtwonumber,SubtractingTwoNumbers} = require('../controllers/AdminManagemnetController');


//Start Block Calling and Initializing Controlers



// Route

Router.post('/addingtwonumber',addingtwonumber);
Router.post('/SubtractingTwoNumbers',SubtractingTwoNumbers);
// route

module.exports = Router;