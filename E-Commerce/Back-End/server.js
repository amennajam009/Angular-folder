const express=require('express');
const app= express();
const PORT= 3232;
const LoadMyEnviormentVariables = require('./configuration/LoadMyEnvironmentVariables');



app.listen(PORT,()=>{
    console.log(`your application has been launched ${PORT}`);
    // console.log(process.env);
})





