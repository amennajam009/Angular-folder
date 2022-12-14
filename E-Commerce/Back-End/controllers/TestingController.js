const postTestingData= ( req,res)=>{
    try {
        let data = req.body;
        res.json({
            message:'You have reached the post testing Endpoint',
            Data:true,
            Result:data
        })
    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }

}

const getTestingData=(req,res)=>{
    try {
        let data='Hello world';
        res.json({
            message:'You have reached the End Point of Get',
            Data:true,
            Result:data
        })
    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }
}
module.exports = {
    postTestingData,
    getTestingData
}