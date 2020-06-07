const express = require('express')
//const bodyParser = require('body-parser')
const app = express()
//set the body parser middleWare
app.use(express.urlencoded({ extended: true }))

//route / root of domain
app.get('/', (req, res) => {
 res.sendfile(__dirname+'/home.html')
})
app.post('/', (req, res) => {
    console.log(req.body);
    if (req.body.userName == 'user1' && req.body.passWord == '1234') {
        res.send('login sucess');
    
    }else{
        res.send('login failed');
    }
    
});
 // route /about
 app.get('/about', (req, res) => {
     res.send(__dirname);
 });
 app.get('/contact', (req, res) => {
    res.send('contact me');
});
app.get('/test', (req, res) => {
    console.log(req);
    
    res.json('test')
});
app.listen(3000,() => {
    console.log('app  listening on port 3000!');
    
})