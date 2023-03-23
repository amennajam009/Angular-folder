// accessing my models here
// const { text } = require("express");
const UserManagmentModel = require ("../models/UserManagmentModel");
const bycrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
// accessing my Models here

const UserRegister = async (req,res)=>{
    try {
        const {firstName,lastName,email,password}=req.body;

        const checkIFAdminAlreadyExists = await UserManagmentModel.findOne({
            Email:email,
        })
        if(checkIFAdminAlreadyExists?.userPrivilege==='Admin'){
            return res.json({
                message: 'Something went wrong!',
                Status: null,
                Data: false
            })
        }

        let checkAdminIdentity = email.split('@')[0];
        checkAdminIdentity =  checkAdminIdentity.toLowerCase();
        if(checkAdminIdentity ==='admin'){
            const  adminToCreate =new UserManagmentModel({
                firstName,lastName,email,password,userPrivilege:'Admin'
            })
            const adminToSave=await adminToCreate.save();
            return res.json({
                message:'Register Successfully',
                data:true
            })
        }
        const userResgiteration=new UserManagmentModel({
            firstName, lastName, email, password
        
        })
        const userToSave =await userResgiteration.save();
        res.json({
            message:'Register Successfully',
            data:true
        })
        
         } catch (error) {
            res.json({
                error: error.message,
                data: false,
                result: null
            })
         }
        }

       
        const UserLogin = async(req,res) =>{
            try {
                const {email,password} = req.body;
                const UserExistence  = await UserManagmentModel.findOne(
                    {email:email}
                )
                if(Object.keys(UserExistence).length===0){
                    return res.json({
                        Message:'Incorrect Email & Password',
                        Data:false,       
                    })
                }

                const CheckUserPassword = await bycrypt.compare(password,UserExistence.password);
                if(CheckUserPassword===false){
                    return res.json({
                        Message:"Incorrect Email & Password",
                        Data:false
                    })
                }

                const token = jwt.sign(
                    {name:"amen"
                    },
                    
                    "superSecret",
                    {
                        expiresIn:'15m'
                    }
                    )
                    res.json({
                        message:"authentication Successfully!!",
                        Data:true,
                        Result:token,
                        userPrivilage:UserExistence.userPrivilage
                    })
            } catch (error) {
                res.json({
                    Message:error.message,
                    data:false,
                    result:null
                })
            }
        }

module.exports={UserRegister,UserLogin}
