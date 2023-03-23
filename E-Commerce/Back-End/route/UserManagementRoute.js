const express=require('express');
const Router =  express.Router();
 

// // here i'm calling my controller
const { 
    UserRegister,
    UserLogin
} = require('../controllers/UserManagementController');


// //calling my middleware

// const { } = require('');




// // Route

Router.post('/UserRegister',UserRegister);
Router.post('/UserLogin',UserLogin);

// // route

module.exports = Router;