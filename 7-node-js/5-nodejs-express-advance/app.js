const express = require('express')
//import the homeRouter
const homeRout = require('./routs/homeRouter')
const product = require('./routs/product')
const app = express()

// app.get('/home', (req, res) => {
//     res.send('blabla');
// });
app.use('/home',homeRout);
app.use('/product',product);
// app.get('/home', (req, res) => {
//     res.send('hello i am home');
// });
// app.get('/home/subhome', (req, res) => {
//     res.send('hello i sub home');
// });
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});