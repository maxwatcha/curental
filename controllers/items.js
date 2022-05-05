const ItemCenter = require('../models/ItemCenter');

exports.getItemtest=(req,res,next)=>{
    ItemCenter.getAll((err,data)=>{
        if(err)
        res.status(500).send({
            message:
            err.message||"Some error occured while retriving data"
        });
        else res.send(JSON.stringify(data));
    });
};

exports.getPendingItem=(req,res,next)=>{
    ItemCenter.getPending((err,data)=>{
        if(err)
        res.status(500).send({
            message:
            err.message||"Some error occured while retriving data"
        });
        else res.send(JSON.stringify(data));
    });
};




exports.getItems=(req,res,next)=>{
    res.status(200).json({success:true, msg:'Show all items'});
};

exports.getItem=(req,res,next)=>{
    res.status(200).json({success:true, msg:`Show item ${req.params.id}`});
};

exports.createItems=(req,res,next)=>{
    res.status(200).json({success:true, msg:'Register new item'});
};

exports.updateItem=(req,res,next)=>{
    res.status(200).json({success:true, msg:`Update item ${req.params.id}`});
};

exports.deleteItem=(req,res,next)=>{
    res.status(200).json({success:true, msg:`Show item ${req.params.id}`});
};