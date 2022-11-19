const express=require('express');
const Router =  express.Router();



//Start Block Calling and Initializing Middlewares

//Start Block Calling and Initializing Middlewares

//Start Block Calling and Initializing Controlers
const { UserTable} = require('../controllers/UserManagementController');


//Start Block Calling and Initializing Controlers




// Route

Router.post('/UserTable', UserTable);

// route

module.exports = Router;