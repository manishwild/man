const express = require('express')

const productRouter = express.Router()



productRouter.get('/',(req,res) =>{
    res.send('welcome home product');
})
productRouter.get('/subproduct',(req,res) =>{
    res.send('welcome sub home product');
})
productRouter.get('/subproduct1',(req,res) =>{
    res.send('welcome sub home product1');
})
module.exports = productRouter