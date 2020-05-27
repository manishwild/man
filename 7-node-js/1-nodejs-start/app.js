const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{//req=request,res=response
    //res.writeHead(200,{'content-type': 'text/plain'})//response 200 means it ok we are getting response
    //res.writeHead(200,{'content-type': 'text/html'}) //send html
    //res.writeHead(200,{'content-type': 'apllication/json'})
    //res.end('Hello World')//msg to desplay

    //***send json text */

    // let obj = {
    //     name:'manish',
    //     firstname:'shahi'
    // }
    // res.end(Json.stringify(obj))
    //*********************send  html text*/
    // let myHtml = 
    // '<html>'+
    // '<head>'+
    // '<title> my first server page</title>'+
    // '</head>'+

    // '<body>'+
    // '<h2>text</h2>'+
    // '</body>'+
    // '</html>';
    // res.end(myHtml)

    // reading file
//    fs.readFile('views/index.html',(err,data) =>{
//        console.log(err);
       
//        res.end(data)
//    })
    //res.end(text)
    //console.log(req.url);
//sync way
    
    
    
    console.log(req.url);
    if(req.url == '/1'){
        res.writeHead(200,{'content-type': 'text/html'})
        let text = fs.readFileSync('views/index.html')
        res.end(text)

    }else if(req.url == '/2'){
        res.writeHead(200,{'content-type': 'text/html'})
        let text = fs.readFileSync('views/index1.html')
        res.end(text)

    }else if(req.url == '/views/style.css'){
        res.writeHead(200,{'content-type': 'text/css'})
        let text = fs.readFileSync('views/style.css')
        res.end(text)

    }else{
        res.writeHead(200,{'content-type': 'text/html'})
        res.end('404 no such a page')
    }
        
    
        

    
    

}).listen(4000)//port name

//npm init to create json file in terminal
//to run it we have to write node .filename.js
//killall node :it will kill all process runnning nodejs
//ctr + c will kill the process
// application/json it will run like json or text/html
