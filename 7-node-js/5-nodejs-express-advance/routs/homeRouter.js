const express = require('express')

const homeRouter = express.Router()

// homeRouter.route('/').get((req,res) =>{
//     res.send('welcome home');
// })
// homeRouter.route('/subhome').get((req,res) =>{
//     res.send('welcome sub home');
// })

homeRouter.get('/',(req,res) =>{
    res.send('welcome home');
})
homeRouter.get('/subhome',(req,res) =>{
    res.send('welcome sub home');
})

module.exports = homeRouter
