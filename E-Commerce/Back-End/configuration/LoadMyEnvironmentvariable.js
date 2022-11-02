const dotenv = require('dotenv');

let MyEnviroment = {};

if(process.env.NODE_ENV === 'testing'){
     MyEnviroment = dotenv.config({path:`${__dirname}/../application-testing-environment.env`});
}

if(process.env.NODE_ENV === 'development'){
     MyEnviroment = dotenv.config({path:`${__dirname}/../application-development-environment.env`});
}

if(process.env.NODE_ENV === 'production'){
     MyEnviroment = dotenv.config({path:`${__dirname}/../application-production-environment.env`});
}