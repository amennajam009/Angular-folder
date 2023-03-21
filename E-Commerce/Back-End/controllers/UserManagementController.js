// accessing my models here
const { text } = require("express");
const UserManagmentModel = require ("../models/UserManagmentModel");
// accessing my Models here

const UserRegister = async (req,res)=>{
    try {
        const {firstName,lastName,email,password}=req.body;

        const IfEmailAlreadyExist = await UserManagmentModel.findOne({
            Email:email,
        })
        if(checkIFAdminAlreadyExists?.userPrivilege==='Admin'){
            return res.json({
                message: 'Something went wrong!',
                Status: null,
                Data: false
            })
        }

        const checkAdminIdentity = email.split('@')[0];
        checkAdminIdentity =  text.toLowerCase();
        if(checkAdminIdentity === 'admin'){
            
        }
    } catch (error) {
        
    }
}






module.exports={UserManagmentModel}
