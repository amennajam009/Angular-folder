const express = require('express');
const Router = express.Router();

// phly icka hum slug dety han then baad may hum icka controller dety han

const {postTestingData,getTestingData} = require('../controllers/TestingController');

Router.post('/postTestingData',postTestingData);
Router.get('/getTestingData',getTestingData);

module.exports = Router;