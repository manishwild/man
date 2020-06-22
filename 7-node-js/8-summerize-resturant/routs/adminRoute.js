const express = require('express')

const fs = require('fs')
//const data = fs.readFileSync('./meals.json');
//const meals = JSON.parse(data);
//app.use(express.static('./public'))


function adminBurgerRouter(meals) {
    const adminRouter = express.Router()
    //build a middleware to check the session for all routes in /admin,/admin/blabla
    adminRouter.use((req,res,next) => {
        if (req.session.user) {
            next()
        } else {
            res.redirect('/')
        }
    })
    //adminRouter.use(express.urlencoded({extended: false}));

    adminRouter.get('/', (req, res) => {
        console.log(req.session.user);
        // if (req.session.user) {
        //     res.render('admin')
        // } else {
        //     res.redirect('/login')
        // }
        res.render('admin')
    });
    


    
    adminRouter.get('/addmeal', function (req, res) {
    //const data = fs.readFileSync('./meals.json');
    //const meals = JSON.parse(data);
    res.render('adminAddmeal', {meals: meals,check:true});
})
adminRouter.get('/deletmeal', function (req, res) {
    //const data = fs.readFileSync('./meals.json');
    //const meals = JSON.parse(data)
    res.render('adminDeletMeal', {meals: meals});
})
adminRouter.post('/deletmeal', (req, res) => {
    //console.log(req.body.mealid);
    const idx = req.body.mealid
    try {
        fs.unlinkSync("./public" + meals[idx].imgUrl)
    } catch (error) {
        console.log(error);
    }
    
    meals.splice(idx,1)
    console.log(meals)
   fs.writeFileSync('./meals.json',JSON.stringify(meals))//we are deleting file and addinh updation one to json file

    res.sendStatus(200)
    //res.json(1)
    
});
adminRouter.get('/editmeal', (req, res) => {
    res.render('adminEditmeal', {meals: meals})
});
adminRouter.post('/editmeal', (req, res) => {
    //res.render('adminEditmeal', {meals: meals})
    console.log(req.body);
   console.log(req.files);
    
    meals[req.body.mealid].title = req.body.mealTitle
    meals[req.body.mealid].description = req.body.mealDescription
    meals[req.body.mealid].price = req.body.mealPrice

    //meals[req.body.mealid].imgUrl = req.body.imgFile
    //delete the old image
    

    
    if (req.files) {
        //console.log(req.files)
        const mealImg = req.files.imgFile
        try {
         fs.unlinkSync("./public"+meals[req.body.mealid].imgUrl)   
        } catch (error) {
          console.log(error);
            
        }
        
        // get image extenstion
     let ext = mealImg.name.substr(mealImg.name.lastIndexOf('.'))
     //move the new img to uploaded folder
     mealImg.mv('./public/uploaded/' + req.body.mealTitle.replace(/ /g , '_') + (req.body.mealid) + ext).then(() =>{
        meals[req.body.mealid].imgUrl = '/uploaded/' + req.body.mealTitle.replace(/ /g , '_') + (req.body.mealid) + ext
        fs.writeFileSync('./meals.json',JSON.stringify(meals))
        //res.sendStatus(200)
        res.json(meals[req.body.mealid].imgUrl)
     }).catch(error => {
        res.sendStatus(500);
    })

    }else{
        fs.writeFileSync('./meals.json',JSON.stringify(meals))
        //res.sendStatus(200)
        res.json(meals[req.body.mealid].imgUrl)
    }
     
    
     //res.sendStatus(200)
});
adminRouter.post('/addmeal', (req, res) => {

    const mealTitle = req.body.mealTitle
    const mealPrice = req.body.mealPrice
    const mealDescription = req.body.mealDescription
    const mealDetails = req.body.mealDetails

   // chees burger 
        // chees_burger_1.jpeg
        // false cases
        // number 0
        // string empty string
        // object undefined
        // datatype null 
       
        
        if(mealTitle &&  mealPrice && mealDescription && req.files){
             //chek if mealtitle is exit
        const foundMeal = meals.find(meal => meal.title == mealTitle)
        if (foundMeal) {
            res.render('adminAddmeal',{meals:meals,check:false})
        } else {
         const mealImg = req.files.mealimg
        //mealImg.name // blabla.jpeg
        // get image extenstion
        let ext = mealImg.name.substr(mealImg.name.lastIndexOf('.'))
        mealImg.mv('./public/uploaded/' + mealTitle.replace(/ /g , '_') + meals.length + ext).then(() => {
            let obj = {
                title: mealTitle,
                description: mealDescription,
                imgUrl: '/uploaded/' + mealTitle.replace(/ /g , '_') + meals.length + ext,
                price: mealPrice,
                details:mealDetails
            }
            meals.push(obj)
            fs.writeFileSync('./meals.json', JSON.stringify(meals))
            //res.render('adminAddMeal', {meals: meals})
            // you need to write the full path on res.redirect
            res.redirect('/admin/addmeal')
        }).catch(error => {
            res.send(error.message);
        })   
        }


            
        
    
    } else {
        res.send("meal data is not complete");
    }
    
    });
    adminRouter.post('/checkmealname', (req, res) => {
        console.log(req.body);
        const foundMeal = meals.find(meal => meal.title == req.body.mealtitle)
        if (foundMeal) {
            res.json('exist')
        } else {
            res.json('name not exist')

        }

        
    });
    return adminRouter
}


module.exports = {
    adminBurgerRouter
}