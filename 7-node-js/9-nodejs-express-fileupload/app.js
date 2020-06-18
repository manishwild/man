const express = require('express');
const fileUpload = require('express-fileupload')


const app = express();
//using file upload
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({extended: false}));
app.get('/', (req, res) => {
    res.render('main')
});
app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.files.photo);
    //move the upload file to public folder
    req.files.photo.mv(__dirname+'/public/uploaded/'+req.files.photo.name).then(()=>{
        res.redirect('/')//redirect prevent rebumisssion again on refresh not like res.render
         //res.render('main')

    }).catch(error =>{
        console.log(error);
        res.send(error.message);
        
        
    })
   
});

app.listen(3000, () => {
    console.log('App listening on port 300!');
});