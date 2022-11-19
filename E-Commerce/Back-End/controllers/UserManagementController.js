//Start Block Dependencies

//Start Block Dependencies


//Start Block Fucntions

const  UserTable =(req,res)=>{
    try {
        const { TableNumber,tableLimit } = req.body;
        let result=''
        for(i=0;i<=tableLimit;i++){
            result += TableNumber +'x'+i+ '=' +(TableNumber*i)+' ';
        }
        res.json({
            Table:result,
            Data:true
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false
        })
    }

        
    }

//Start Defining and Initializing Controllers
 module.exports = {
  UserTable,
    
}