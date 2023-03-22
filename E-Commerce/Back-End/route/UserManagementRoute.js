const express=require('express');
const Router =  express.Router();
 

// // here i'm calling my controller
const { 
    UserRegister
} = require('../controllers/UserManagementController');


// //calling my middleware

// const { } = require('');




// // Route

Router.post('/UserRegister',UserRegister);

// // route

module.exports = Router;