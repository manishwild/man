const express = require('express')

const app = express()
const connectionString = 'mongodb+srv://manish:thegreat1000@cluster0.wtcsm.mongodb.net/test1?retryWrites=true&w=majority'

app.get('/', (req, res) => {
    res.send('Welcome to mongoDb')
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});