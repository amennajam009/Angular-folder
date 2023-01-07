const CreateProduct= async (req,res)=>{
    try {
        let a=10;
        let AddmyVariableintoDatabase= await querrypleaseaddmydatatodateb;

        res.json({
            Message:'sdkfasdf',
            Data:true,
            Result:AddmyVariableintoDatabase
        })
    } catch (error) {
        res.json({
            Message:error.Message,
            Data:null,
            Result:null
        })
    }
}
