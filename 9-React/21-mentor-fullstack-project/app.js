const express = require('express')
const fs = require('fs')
const app = express()
const port =process.env.Port || 3000

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('./public'))

app.post('/register', (req, res) => {
    console.log(req.body);
    res.json(1)
});

// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/', (req, res, next) => {
    const html = fs.readFileSync(__dirname + '/index.html','utf-8')
    res.send(html);
});
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});