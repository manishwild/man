const http = require('http')
const fs = require('fs')
const url = require('url')
http.createServer(function (req,res) {
    let urlObj = url.parse(req.url, true)
    switch (urlObj.pathname) {
        case '/home':
        //let sharedText = fs.readFileSync('views/shared.html')
        res.writeHead(200,{'content-type': 'text/html'})
        let text = fs.readFileSync('views/index.html')
        res.end(text)
            break;
        case '/css':
                res.writeHead(200,{'content-type': 'text/css'})
                let css = fs.readFileSync('views/css/index.css')
                res.end(css)
                break;
                       
        case '/image':
                res.writeHead(200,{'content-type': 'image/jpg'})
                let img = fs.readFileSync('views/img/hero.jpg')
                res.end(img)
                break;
        case '/image1':
                    res.writeHead(200,{'content-type': 'image/png'})
                    let img1 = fs.readFileSync('views/img/DCI-Digital-Career-Institute-Logo.png')
                    res.end(img1)
                    break;   
        case '/contact':
                       
                        
                        
                       
        res.writeHead(200,{'content-type': 'text/html'})
        let text2 = fs.readFileSync('views/contact.html')
        res.end(text2)
                        break;                                    
    
        default:
            res.writeHead(404,{'content-type': 'text/html'})
        res.end("<h2>404 page is not found</h2>")
            break;
    }
}).listen(4500)