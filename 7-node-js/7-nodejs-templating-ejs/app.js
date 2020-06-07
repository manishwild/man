const express = require('express')

const app = express()

//set view engine type
app.set('view engine', 'ejs');

//set the views folder
app.set('views',__dirname + '/views');

app.get('/', (req, res) => {
    //res.send('hello');
    let arr = ['banana','apple','watermelon']
    res.render('main',{title:'welcome page',fruits:arr})
});
app.get('/contact', (req, res) => {
    //res.send('hello');
    res.render('main',{title:'contact us',fruits:[]})
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
