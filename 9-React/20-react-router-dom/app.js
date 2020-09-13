const express = require('express')
const fs = require('fs');
const { ppid } = require('process');
const app = express()
const port = process.env.Port || 3000

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });
app.use('/', (req, res, next) => {
    const html = fs.readFileSync(__dirname + '/index.html','utf-8')
    res.send(html);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})
