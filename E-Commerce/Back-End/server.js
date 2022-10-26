const express=require('express');
const app= express();
const PORT= 3232;



app.listen(PORT,()=>{
    console.log(`your application has been launched ${PORT}`);
    console.log(process.env);
})
