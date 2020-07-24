const express = require('express')
const path = require('path')
const fs = require('fs')

const port = process.env.port || 3000

const app = express()
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// include dataModule
const dataModule = require('./modules/moongose')

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/register', (req, res) => {
    res.render('login')

});
app.post('/register', (req, res) => {
    console.log(req.body)
   
    const fName = req.body.fName.trim()
    const lName = req.body.lName.trim()
    const password = req.body.password
    const email = req.body.email.trim()
    
    
    if (fName && lName  && password && email ){
        dataModule.registerUser(fName, lName, password, email).then(() => {
            res.json(1)
        }).catch(error => {
            res.json(2)
        })
    } else {
        res.json(2)
    }
    
});

app.listen(port, () => {
    console.log('App listening on port!');
});