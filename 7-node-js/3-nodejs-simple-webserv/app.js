const http = require('http')
const fs = require('fs')
const url = require('url')

// import nodemailer
const nodemailer = require('nodemailer')

//import our module
const saver = require('./modules/saver')
http
    .createServer(function (req, res) {
        let urlObj = url.parse(req.url, true)
        switch (urlObj.pathname) {
            case '/home':
                //let sharedText = fs.readFileSync('views/shared.html')
                res.writeHead(200, {'content-type': 'text/html'})
                let text = fs.readFileSync('views/index.html')
                res.end(text)
                break;
            case '/css':
                res.writeHead(200, {'content-type': 'text/css'})
                let css = fs.readFileSync('views/css/index.css')
                res.end(css)
                break;

            case '/image':
                res.writeHead(200, {'content-type': 'image/jpg'})
                let img = fs.readFileSync('views/img/hero.jpg')
                res.end(img)
                break;
            case '/image1':
                res.writeHead(200, {'content-type': 'image/png'})
                let img1 = fs.readFileSync('views/img/DCI-Digital-Career-Institute-Logo.png')
                res.end(img1)
                break;
            case '/contact':
                if (urlObj.query.fname) {
                    let massage = urlObj.query.fname + '\n' + urlObj.query.lname + '\n' +urlObj.query.email + '\n' +urlObj.query.message + '\n'
                    console.log(urlObj.query);
                    saver.saveContent(massage,'content.txt')
                    //send email
                    const transporter = nodemailer.createTransport({
                        service:'gmail',
                        auth:{
                            user:'manishwild1000@gmail.com',
                            pass:'mypassword'
                        }
                    })
                    const mailOption = {
                        from:'youremail@gmail.com',
                        to:'manishwild1000@yahoo.com',
                        subject:urlObj.query.email,
                        text:urlObj.query.fname +'\n' + urlObj.query.message
                    }
                    transporter.sendMail(mailOption,function (error,info) {
                        if (error) {
                            console.log(error);
                            
                        } else {
                            console.log('Email sent: ' + info.response)
                        }
                    })
                }
                //saver.saveContent('hello i am some content','content.txt')
                res.writeHead(200, {'content-type': 'text/html'})
                let text2 = fs.readFileSync('views/contact.html')
                res.end(text2)
                break;

            default:
                res.writeHead(404, {'content-type': 'text/html'})
                res.end("<h2>404 page is not found</h2>")
                break;
        }
    })
    .listen(4500)

    //to add another email we have to use smtp nodemailer