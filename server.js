const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

//Load env vars
dotenv.config({path:'./config/config.env'});

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//Route files
const items = require('./routes/items');
//Mount routers
app.use(cors(corsOptions)) 
app.use('/api/v1/items', items);

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log('Server running in', process.env.NODE_ENV, ' mode on port ', PORT));