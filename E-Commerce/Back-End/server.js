const express=require('express');


// khae sy b response request askti hai humny icko hybrid krdia haii for mobile users for watch users nd for all users that's why we're using cors
const cors= require('cors')
const amen = require('./configuration/configuration')
const PORT = process.env.PORT || 9090;
// const PORT= 3232;
const LoadMyEnviormentVariables = require('./configuration/LoadMyEnvironmentVariable');

// //Block Start Initialize the app and Creating app mete-data
const app = express();
app.use(express.urlencoded({ extended: true }));
// hum edhr json icliye use kr rhy han kyu k yeh space kaam leta hai cuz yeh string may hai toh yeh humry data ko parse kr k string may convert krdyga taak 
// data storage kaam use ho
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cors());



//  first argument may always request he ayegi front-end sy then usk baad ata hai response or next means flow ko agay bhejna k chlta jaa agay
app.all('*', (req, res, next) => {
    // This is how we protect the api
    res.header('Access-Control-Allow-Origin', '*');// So it make the header allow to the origin when cross platfrom try to exchange the data
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        //Mehtod is a property which help us to use the Methods by request. Browers send the options request before your Mthods request
    }
    next();
     //if nothing of the response sent back so next() means other rou
});
const _productManagmentRoute=require('./route/ProductManagmentRoute');
const _AdminManagementRoute=require('./route/AdminManagmentRoute');
const _UserManagementRoute=require('./route/UserManagementRoute');
const _TestingManagementRoute=require('./route/TestingRoute')


// //*****UsingRoutes*****//

app.use('/productManagment',_productManagmentRoute);
app.use('/AdminManagement',_AdminManagementRoute);
app.use('/UserManagement', _UserManagementRoute);
app.use('/TestingManagement' , _TestingManagementRoute);
// app.use('/PaymentManagement',_PaymentManagement);
// //*****UsingRoutes*****//

// this is our error handling !!!!!!!
app.use((req, res, next) => {
    const error = new Error('Url not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    })
});



// //Start Block Accessing The Routes in the Entry Point

app.listen(PORT,()=>{
    console.log(`your application has been launched ${PORT}`);
    // console.log(process.env);
})





