const dotenv = require('dotenv');

let MyEnviroment = {};

if(process.env.NODE_ENV === 'testing'){
     MyEnviroment = dotenv.config({path:`${__dirname}/../test.env`});
}

if(process.env.NODE_ENV === 'development'){
     MyEnviroment = dotenv.config({path:`${__dirname}/../development.env`});
}

if(process.env.NODE_ENV === 'production'){
     MyEnviroment = dotenv.config({path:`${__dirname}/../production.env`});
}

console.log(MyEnviroment);