const express = require('express')
const fs = require('fs')

const dataModule = require('./modules/mongooseDataModule')

const app = express()
const port =process.env.PORT|| 5000


app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json())

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

app.use('/', (req, res, next) => {
    const html = fs.readFileSync(__dirname + '/index.html','utf-8')
    res.send(html);
});
app.listen(port, () => {
    console.log(`App listening on ${port}!`);
});