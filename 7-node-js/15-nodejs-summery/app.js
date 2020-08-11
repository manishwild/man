const express = require('express')
const fs = require('fs')
//const path = require('path')

const app = express()
const dataModule = require('./modules/mongooseDatamodule')
//app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.get('/', (req, res) => {
   res.render('login')
   
});
app.post('/register', (req, res) => {
    const name = req.body.name.trim()
    const email = req.body.email.trim()
    const password = req.body.password
   
    if (name&&email && password ) {
        dataModule.registerUser(name,email,password).then(() => {
            res.json(1)
        }).catch(error => {
            if (error == "exist") {
                res.json(3) 
            }else[
                res.json(4)
            ]
        })
    }else{
        res.json(2)
    }

});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});


