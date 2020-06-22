const express = require('express')
const session = require('express-session')
const fileupload = require('express-fileupload')
const cookie = require('cookie-parser')
const fs = require('fs')

//include dataModule
const dataModule = require('./modules/dataModule')

const app = express()
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.use(express.urlencoded({extended: false}));
app.use(express.json())
// create session object options
const sessionOptions = {
    secret: 'bookstore',
    cookie: {}
}
// use a session
app.use(session(sessionOptions))

// use cookie parser
app.use(cookie())
// set fileupload middleware
app.use(fileupload({
    limits: { fileSize: 50 * 1024 * 1024 }
}))



app.get('/', (req, res) => {
    res.render('main')
});
app.get('/shop', (req, res) => {
    res.render('shop')
});
app.get('/register', (req, res) => {
    res.render('register')
});
app.post('/register', (req, res) => {
    // your post register handler here
    //console.log(req.body);
    // 2 data error
    // 1 user registered succefully
    // 3 user is exist
    // 4 server is error
    const email = req.body.email
    const password = req.body.password
    const repassword = req.body.repassword
    if (email && password && password == repassword) {
        dataModule.registerUser(email,password).then(() => {
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

app.listen(5000, () => {
    console.log('App listening on port 5000!');
});