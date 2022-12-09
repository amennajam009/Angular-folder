 const checkingAuthentication=(req,res,next)=>{
    try {

        // edhr hum ny phly destruct krlia hai body may sy token
        const{token}=req.body
        if(token!==1){
            return
        }else{
            next();
        }
    } catch (error) {
        return error.message;
    }
}

module.exports={checkingAuthentication}