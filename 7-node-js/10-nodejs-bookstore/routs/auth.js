const express = require('express')
const dataModule = require('../modules/dataModule');
const authRoute = express.Router()

// authRoute.get('/login', (req, res) => {
//     res.render('login')
// });

// authRoute.post('/login', (req, res) => {
//     //res.render(req.body)
//     let userName = req.body.userName
//     let password = req.body.password
//     //check if userName && password are there
//     dataModule.checkUser(userName,password).then((data)=>{
        
//         if (data.users) {
//             req.session.user = data
//         } else {
//             res.redirect('/auth/login')
//         }
//     })

//     //res.send((req.body));

// });


module.exports = authRoute