const mongoose = require('mongoose');
const Package = require('../package.json');

                //(Load the mongo uri over there)  (Protocols han yeh )   
 mongoose.connect(`mongodb+srv://amen123:amen123@backend-database.uut28rz.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true },
//  yeh call back hai 
  (error,connection) => {
    if (!error) {
        console.log(`\nMogoDb Connected Successfuly at MongoAtlas with Database Name E-commerce DataBase\n`);
        console.log("Your App Has the Following Dependicies\n");
        for (dependencies in Package.dependencies) {
            console.log(dependencies);
        }
    }
    else { console.log('Error: Not Connected to the MongoDb' + error) }
});