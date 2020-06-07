const express = require('express')
const app = express()
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.send('hello');
});
app.get('/home/subhome', (req, res) => {
    //res.send("Hello FBW5");
    res.sendFile(__dirname+'/home.html')
})
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});