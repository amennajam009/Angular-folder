//Start Adding Dependencies

//Start Adding Dependencies


//Start Defining and Initializing Controllers

// controller is just a function
 
const addingtwonumber =  (req, res) => {
    try {
        const { number1, number2 } = req.body;
        const result = number1+number2;
        res.json({
            Message:'You have Reached AddingTwoNumbers End Point',
            Result:result,
            Data:true
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Result:null,
            Data:false
        })
    }
}
//  minus one!!!
const subtractnum=(req,res)=>{
    try {
        const { number1, number2 } = req.body;
        const result = number1-number2;
        res.json({
            Message:'You have Reached AddingTwoNumbers End Point',
            Result:result,
            Data:true
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Result:null,
            Data:false
        })
    }

        
    }


//Start Defining and Initializing Controllers
 module.exports = {
    addingtwonumber,
    subtractnum
    
}