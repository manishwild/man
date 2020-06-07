const express = require('express')
// import nodemailer
const emailSender = require('./modules/emailSender')


const app = express()
// use express urlencoder to get post data
app.use(express.urlencoded({extended: true}));
//app.use(bodyParser.json());

app.use(express.static('./public'))
//set view engine type
app.set('view engine', 'ejs');

//set the views folder
app.set('views',__dirname + '/views');

app.get('/', (req, res) => {
    res.render('main')
});
app.get('/menu', (req, res) => {
    res.render('menu')
});

app.get('/contact', (req, res) => {
    
    res.render('contact')
});

app.post('/contact', (req, res) => {
    console.log(req.body);
    emailSender.sendEmail(req.body.name,req.body.email,req.body.subject,req.body.message,(ok)=>{
        if (ok) {
            res.sendStatus(200)
        }else{
            res.sendStatus(500)
        }
    })
    
    
    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'manishwild1000@gmail.com',
    //         pass: ''
    //     }
    // })
    // const mailOption ={
    //     from: 'manishwild1000@gmail.com',
    //     to: 'manishwild1000@yahoo.com',
    //     subject:req.body.subject,
    //     text: req.body.name + '\n' + req.body.message
    // }
    // transporter.sendMail(mailOption, function (error, info) {
    //     if(error){
    //         console.log(error);
            
    //     } else {
    //         console.log(info.response);
            
    //     }
      //})
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
