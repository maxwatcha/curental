const express = require('express');
const { getItems, getItem, createItems, updateItem, deleteItem,getItemtest,getPendingItem} = require ('../controllers/items');
const router = express.Router();

router.route('/itemCenters').get(getItemtest);
router.route('/itemCenters-pending').get(getPendingItem);
router.get('/', (req,res) =>{
    res.status(200).json({success:true, msg:'show all item'});
});

router.get('/:id', (req,res) =>{
    res.status(200).json({success:true, msg:`Show item ${req.params.id}`});
});

router.post('/', (req,res) =>{
    res.status(200).json({success:true, msg:'Register new item'});
});

router.put('/:id', (req,res) =>{
    res.status(200).json({success:true, msg:`Update item ${req.params.id}`});
});

router.delete('/:id', (req,res) =>{
    res.status(200).json({success:true, msg:`Delete item ${req.params.id}`});
});

module.exports = router;