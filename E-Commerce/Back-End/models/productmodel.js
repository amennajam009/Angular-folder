//Dependencies
const mongoose = require('mongoose');

// Date
// edhr humny new date assign krdi hai jo k user readability wali date dyga 
const today = new Date();
// edhr hum today uper wala ly gy or hum edhr today.getdate krein gy toh humry pas edhr date ajyegi
const day = today.getDate();
// edhr humny .getmonth() protype use kia hai or agay +1 lagaya hai kyu k yeh point may deta hai that' why +1 lagaya hai
const month = today.getMonth() + 1; 
const year = today.getFullYear(); //year
const time = today.getTime(); //time 


//Start Block Schema Creating
const ProductSchema = mongoose.Schema({
    ProductName: { type: String, required: true },
    ProductQuantity: { type: Number, required: true },
    ProductPrice: { type: Number, required: true },
    color:{ type:String, required:true },
    LogoMaterial:{ type:String, required:true },
    selectSize:[],
    EnterDescription:{ type:String, required:true },
    status: { type: Number, default: 1 },
    softDeleteStatus: { type: Number, default: 0},
    // Category: { type:String, required:true},
    // ProductMaterial: { type:String, required:true},
    
    ImageDetail: [
        {
            ImageUrl: { type: String },
            ImageName: { type: String },
            ImageMimeType: { type: String },
        }
    ],
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
}, { timestamps: true })


//Exporting The Schema
module.exports = mongoose.model('ProductCollection', ProductSchema);