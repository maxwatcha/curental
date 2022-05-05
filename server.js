const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
const sql = require ('./config/itemCenterDB');

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
//test register item
app.post('/api/v1/item', function(request, response){
   sql.query('insert into item (item_id, item_name, description,catalog,status,lessor_id,current_tenant_id,place,time_stamp) value(?,?,?,?,?,?,?,?,?)',
   [request.body.item_id,request.body.item_name,request.body.description,
      request.body.catalog,request.body.status,request.body.lessor_id,
      request.body.current_tenant_id,request.body.place,request.body.time_stamp],
      function(error, rows){
         response.end(JSON.stringify(rows));
      }
      
   )});
   
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log('Server running in', process.env.NODE_ENV, ' mode on port ', PORT));