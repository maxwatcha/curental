const sql = require ('../config/itemCenterDB');

//constructor
/*item_id   
item_name 
description 
catalog 
status 
lessor_id  
current_tenant_id  
place 
time_stamp
*/
const ItemCenter = function(cu_rental){
    this.item_id = cu_rental.item_id;
    this.item_name = cu_rental.item_name; 
    this.description = cu_rental.description;
    this.catalog = cu_rental.catalog;
    this.status = cu_rental.status;
    this.lessor_id = cu_rental.lessor_id;
    this.current_tenant_id = cu_rental;
    this.place = cu_rental.place;
    this.time_stamp = cu_rental.time_stamp;
};

ItemCenter.getAll = result => {
    sql.query("SELECT * FROM item", (err,res)=>{
        if(err) {
            console.log("eror: ", err);
            result(null,err);
            return;
        }
        console.log("item: ", res);
        result(null,res);
    });
};
module.exports = ItemCenter;

