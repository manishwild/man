const fs = require('fs')



function registerUser(email,password) {
    //read user.jsom and convert it to object
    return new Promise((resolve,reject)=>{
        const readData = fs.readFileSync('./user.json')
        const data = JSON.parse(readData)

        //check user email is exist or not using es6 find array method
        const existUser = data.users.find(user => user.email == email)
        if (existUser) {
            reject('exist')
        } else {
            data.users.push({
                id:data.newId,
                email:email,
                password: password
            })
            //increase the newId property for data to be used for next registered user
            data.newId++
            // convert data to json and write in user.json
            fs.writeFileSync('./user.json',JSON.stringify(data))
            resolve()
        }
    })
   
}
function addBook(bookTitle,bookDescription,bookpdf,bookImgs) {
    return new Promise((resolve,reject)=>{
        //array will contain the url of image to be saved in the books.json
        const imgsArr = []
        //save the image in uploaded folder and set the new pattern
        bookImgs.forEach((img,idx) => {
            //get file extension
           let ext = img.name.substr(img.name.lastIndexOf('.')) 
           // set the new image name
           let newName = bookTitle.trim().replace(/ /g, '_') + '_' + 1 + '_' + idx + ext
           img.mv('./public/uploaded/' + newName)
           imgsArr.push('/uploaded/' + newName)
        });
        // set a new pdf file name
        let pdfName = bookTitle.trim().replace(/ /g, '_') + '_' + 1 + '.pdf' 
        // move the pdf file with the new name to uploaded folder
        bookpdf.mv('./public/uploaded/' + pdfName)
        //set the pdf url that gonna be saved in the json file
        let pdfNewUrl = '/uploaded/' + pdfName

        //read books.json
        const bookJson = fs.readFileSync('./books.json')
        //converted the read file to object
        const bookObj = JSON.parse(bookJson)
        bookObj.books.push({
            id:bookObj.newid,
            title:bookTitle.trim(),
            description:bookDescription,
            imgs:imgsArr,
            pdfUrl:pdfNewUrl,
            userid: 1
        })
        //increase the new id by one for the next book
        bookObj.newid++
        //save the bookObj to books.json
        fs.writeFileSync('./books.json',JSON.stringify(bookObj))
        resolve()

    })
            
            
    
}
module.exports = {
    registerUser,
    addBook
}