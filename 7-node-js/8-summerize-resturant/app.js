const express = require('express')
const fileUpload = require('express-fileupload')
const session = require('express-session')
const cookieParser = require('cookie-parser')
// import nodemailer
const emailSender = require('./modules/emailSender')
const fs = require('fs');
//import the adminRouter
const adminRout = require('./routs/adminRoute');
const { json } = require('express');
const data = fs.readFileSync(__dirname + '/meals.json');
const meals = JSON.parse(data);

const app = express()
//create session object options
const sessionOptions = {
    secret:'burger',
    cookie:{}
}
//use a session
app.use(session(sessionOptions))
//use cookie parser
app.use(cookieParser())
//set fileupload middelware
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));
// use express urlencoder to get post data//when data encoded true otherwise false
app.use(express.urlencoded({extended: false}));
// use express.json() to get posted json data and converted to the object inside the body
app.use(express.json());

app.use(express.static('./public'))
//set view engine type
app.set('view engine', 'ejs');

//set the views folder
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('main')
});
app.get('/login', (req, res) => {
    //check saved cookie in req
    console.log(req.cookies);
    if (req.cookies.burgerUser) {
        const jsonText = fs.readFileSync(__dirname+'/user.json')
        const users = JSON.parse(jsonText)
        const foundUser = users.find(user => user.username == req.cookies.burgerUser.username && user.password == req.cookies.burgerUser.password )
        if (foundUser) {
            req.session.user = foundUser
            res.redirect('/admin')
        }else{
            res.render('login')
        }
    }else{
        res.render('login') 
    }
    
});
app.get('/logout', (req, res) => {
    //destroy the session and log out
    req.session.destroy()
    res.clearCookie('burgerUser')
    res.redirect('/')
});
app.post('/login', (req, res) => {
    //res.render('login',{user})
    console.log(req.session)
    const jsonText = fs.readFileSync(__dirname+'/user.json')
    const users = JSON.parse(jsonText)
    //console.log(users);
    //****************first way */
//     let check = false
//     for (let i = 0; i < users.length; i++) {
//         if(req.body.username == users[i].username  && req.body.password == users[i].password ){
//             check = true
//             break;
//         //res.send("login success");
//     } 
// }
// if (check) {
//     res.json('exist')
// } else {
//     res.json('notexist')
// }
//********************************second way */
   const foundUser = users.find(user => user.username == req.body.username && user.password == req.body.password )    
   if (foundUser) {
       req.session.user = foundUser
       //set burgerUser cookies to use it on login page next time
       //res.cookie('burgerUser',foundUser,{maxAge:60000})
       res.cookie('burgerUser',foundUser,{maxAge:6000000,httpOnly:true})
        res.json('exist')
    } else {
        res.json('notexist')
    }
 });
app.use('/admin',adminRout.adminBurgerRouter(meals));
//app.use('/admin/deletmeal',adminRout);
// app.get('/admin/addmeal', (req, res) => {
// res.render('adminAddmeal',{meals:meals}) });
// app.get('/admin/addmeal', function (req, res) {
//     //const data = fs.readFileSync(__dirname + '/meals.json');
//     //const meals = JSON.parse(data);
//     res.render('adminAddmeal', {meals: meals});
// })

// app.get('/admin/deletmeal', function (req, res) {
//     res.render('adminDeletMeal', {meals: meals});
// })

// app.post('/admin/addmeal', (req, res) => {
//     const mealTitle = req.body.mealTitle
//     const mealPrice = req.body.mealPrice
//     const mealDescription = req.body.mealDescription

//     let obj = {
//         title: mealTitle,
//         description: mealDescription,
//         imgUrl: "/img/burger/4.png",
//         price: mealPrice
//     }
//     meals.push(obj)
//     fs.writeFileSync(__dirname + '/meals.json', JSON.stringify(meals))
//     //res.render('adminAddmeal',{meals:meals})
//     res.redirect('/admin/addmeal')
// });
app.get('/menu', (req, res) => {
    // const data = fs.readFileSync(__dirname+'/meals.json'); const meals =
    // JSON.parse(data);
    res.render('menu', {meals: meals})
});

app.get('/contact', (req, res) => {

    res.render('contact', {sent: 1})
});

app.post('/contact', (req, res) => {
    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    if (name != "" && name.length < 100) {
        emailSender.sendEmail(name, email, subject, message, (ok) => {
            if (ok) {
                res.sendStatus(200)

            } else {
                res.sendStatus(500)

            }
        })

    }

    // const transporter = nodemailer.createTransport({     service: 'gmail',
    // auth: {         user: 'manishwild1000@gmail.com',         pass: ''     } })
    // const mailOption ={     from: 'manishwild1000@gmail.com',     to:
    // 'manishwild1000@yahoo.com',     subject:req.body.subject,     text:
    // req.body.name + '\n' + req.body.message } transporter.sendMail(mailOption,
    // function (error, info) {     if(error){         console.log(error);     }
    // else {         console.log(info.response);     } })
});
app.post('/contact1', (req, res) => {
    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    if (name != "" && name.length < 100) {
        emailSender.sendEmail(name, email, subject, message, (ok) => {
            if (ok) {
                //res.sendStatus(200)
                res.render('contact', {sent: 2})
            } else {
                //res.sendStatus(500)
                res.render('contact', {sent: 3})
                //render is showing view
            }
        })

    }

});
//get meal using id
app.get('/meal/:title', (req, res) => {
    //res.send(req.params.id);
    const mealtitle = req.params.title
    const foundMeal = meals.find(meal=> meal.title.trim().replace(/ /g,'_') == mealtitle)
    if (foundMeal) {
    res.render('meal',{
        mealTitle:foundMeal.title,
        mealPrice:foundMeal.price,
        mealDescription:foundMeal.description,
        mealDetails:foundMeal.details,
        mealImg:foundMeal.imgUrl
    })
    }else{
        res.send('you are not allowed');
    }
});
//get meal using id
// app.get('/meal/:id', (req, res) => {
//     //res.send(req.params.id);
//     const idx = req.params.id
    
//     if (meals[idx]) {
//     res.render('meal',{
//         mealTitle:meals[idx].title,
//         mealPrice:meals[idx].price,
//         mealDescription:meals[idx].description,
//         mealImg:meals[idx].imgUrl
//     })
//     }else{
//         res.send('you are not allowed');
//     }
// });

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
