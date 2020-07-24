const passwordHash = require('password-hash')
//const { MongoClient, ObjectID } = require('mongodb')
const mySql = require('mysql')

const fs = require('fs')
const { log } = require('console')
const { title } = require('process')

let con = null
function connect() {
    return new Promise((resolve, reject) => {
        if (con) {
        if (con.state === 'disconnected') {
            con.connect(error => {
                if (error) {
                    reject(error)
                } else {
                    resolve()
                }
            })
        } else {
            resolve()
        }
    } else {
        con = mySql.createConnection({
            multipleStatements: true,
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '12345678',
            database: 'fbw5_test'
        })
        con.connect(error => {
            if (error) {
                reject(error)
            } else {
                resolve()
            }
        })
    }
    })
 }
function runQuery(queryString) {
    return new Promise ((resolve, reject) => {
        connect().then(() =>{
            con.query(queryString ,(error, result, fields) =>{
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })  
        }).catch(error => {
            reject(error)
        })
    })
}

function registerUser(email,password) {
    return new Promise((resolve,reject) =>{
        //"INSERT INTO users (email, password) VALUES ('" + email + ",'" + passwordHash.generate(password) + " )" 
        runQuery(`INSERT INTO users (email, password) VALUES ('${email}','${passwordHash.generate(password)}')`).then(result => {
            resolve()
        }).catch(error => {
           
            if (error.errno === 1062) {
                reject('exist')
            } else {
                 reject(error)
            }    
           
        })

    })
        
     
    
}

function checkUser(email,password) {
    return new Promise((resolve,reject) =>{
       //an result from select query will be return as an aaara(empty array or array with one element)
           runQuery(`SELECT * FROM users where email like '${email}'`).then(user =>{
               console.log(user);
                if (user.length === 0) {
                     reject(3)
                   
                } else {
                    if (passwordHash.verify(password, user[0].password)) {
                        user[0]._id = user[0].id
                        resolve(user[0])
                    }else{
                        reject(3)
                    }
                }
               
            }).catch(error => {
                reject(error)
        })
    
})
}

function addBook(bookTitle, bookDescription, bookPdf, bookImgs, userid) {
    return new Promise((resolve, reject) => {
         // set a new pdf file name
                      let pdfName = bookTitle.trim().replace(/ /g, '_') + '_' + userid + '.pdf'
                  // move the pdf file with the new name to uploadedfiles folder
                      bookPdf.mv('./public/uploaded/' + pdfName)
                      let pdfNewUrl = '/uploaded/' + pdfName
        runQuery(`INSERT INTO books (Title, description, Pdfurl, userid) VALUES ('${bookTitle}','${bookDescription}','${bookPdf}','${userid}')`).then(result => {
            let saveImgsQuery = ''
            bookImgs.forEach((img, idx) => {
                        // get file extension
                          let ext = img.name.substr(img.name.lastIndexOf('.'))
                          // set the new image name
                          let newName = bookTitle.trim().replace(/ /g, '_') + '_' + userid + '_' + idx + ext
                          img.mv('./public/uploaded/' + newName)
                          const imgUrl = '/uploaded/' + newName
                          saveImgsQuery += `INSERT INTO imgs (imgUrl, bookid) VALUES ('${imgUrl}',${result.insertId});`

                    });
                      runQuery(saveImgsQuery).then(response => {  
                          resolve() 
                      }).catch(error => {
                          reject(error)
                      })               
            }).catch(error => {
              if (error.errno === 1062) {
                  reject(3)
              } else {
                  reject(error)
              }
              
            })
        
        })
}

function getAllBooks() {
    return new Promise((resolve,reject) =>{
                
            runQuery('SELECT books.*,imgs.* FROM books INNER JOIN imgs on books.id = imgs.bookid').then(results => {
                const books = []
                //add id property to cach book instead od _ID
                results.forEach(result => {
                    // search if the book is added to books array
                    let book = books.find(element => element.id === result.bookid)
                    if (book) {
                        // id the book is added before we need only to apppend the imgs property with the new imgurl
                        book.imgs.push(result.imgUrl)
                    } else {
                        // if the book is not added to books, we need to add it to books and set imgs as new array with one element imgurl
                        books.push({
                            id: result.bookid,
                            title: result.title,
                            description: result.description,
                            pdfUrl: result.pdfUrl,
                            userid: result.userid,
                            imgs: [result.imgUrl]
                        })
                    }
                   
                 });     
                resolve(books)
            }).catch(error =>{
                reject(error)
            })
       

    })
}
function getBook(id) {
    return new Promise((resolve,reject) =>{
        
            
            runQuery(`SELECT books.* , imgs.* FROM books INNER JOIN imgs on imgs.bookid = books.id WHERE imgs.bookid =${id}`).then(results => {
                
                if (results.length) {
                   const book = {}
                   results.forEach(result => {
                       if (book.id) {
                           book.imgs.push(result.imgUrl)
                       } else {
                           book.id = result.bookid
                           book.title = result.title
                           book.description = result.description
                           book.pdfUrl = result.pdfUrl
                           book.userid = result.userid
                           book.imgs = [result.imgUrl]
                       }
                   })
                    resolve(book)
                     
                } else {
                    reject(new Error('Cannot find a book with this id ; ' + id))
                }
                                               
            }).catch(error =>{
               
                reject(error)
            })

      

    })
}

function userBooks(userid) {
    return new Promise((resolve,reject) =>{
        
            
        runQuery(`SELECT books.* , imgs.* FROM books INNER JOIN imgs on books.id = imgs.bookid WHERE books.userid =${userid}`).then(results => {
            
            const books = []
                //add id property to cach book instead od _ID
                results.forEach(result => {
                    // search if the book is added to books array
                    let book = books.find(element => element.id === result.bookid)
                    if (book) {
                        // id the book is added before we need only to apppend the imgs property with the new imgurl
                        book.imgs.push(result.imgUrl)
                    } else {
                        // if the book is not added to books, we need to add it to books and set imgs as new array with one element imgurl
                        books.push({
                            id: result.bookid,
                            title: result.title,
                            description: result.description,
                            pdfUrl: result.pdfUrl,
                            userid: result.userid,
                            imgs: [result.imgUrl]
                        })
                    }
                   
                 });     
                resolve(books)
            }).catch(error =>{
                reject(error)
            })
  

})
    

  
}
function UpdateBook(bookid, bookTitle, oldImgsUrls, bookDescription, newPdfBook, newImgs,userid) {
    return new Promise((resolve, reject) => {
        try {
            
        
        (async() => {
            let oldBookData = await getBook(bookid)
            const deletedImgs = []
            const keepImgs = []
            //get the update version number
         
            let newIdx = oldBookData.imgs.length
           //check which images user wants to keep and which to delete
            oldBookData.imgs.forEach(img => {
                if (oldImgsUrls.indexOf(img) >= 0) {
                    keepImgs.push(img)
                } else{
                    deletedImgs.push(img)
                }
            })
            let newImgsQuery = ''
            const currentTime = Date.now()
            newImgs.forEach((img,idx) => {
                const imgExt = img.name.substr(img.name.lastIndexOf('.'))
                const newImgName = bookTitle.trim().replace(/ /g,'_') + '_' + userid + '_' + idx + '_' + currentTime + imgExt
                //newImgsUrlArr.push('/uploaded/' + newImgName)
                const newImgsUrl = ('/uploaded/' + newImgName)
                newImgsQuery += `INSERT INTO imgs (imgUrl, bookid) VALUE ('${newImgsUrl}','${bookid}');`
                img.mv('./public/uploaded/' + newImgName)
            })
            // delete the deleted img file from the system
            let deleteImgQuery = ''
            deletedImgs.forEach(file =>{ 
                deleteImgQuery += `DELETE FROM imgs WHERE imgURL like  '${file}' AND bookid = ${bookid};`
                if (fs.existsSync('./public' + file)) {
                   fs.unlinkSync('./public' + file)
            } 
                
            });
            // check if user upload a new pdf file and move it to the same place to the old one so it will overwrite it
            if (newPdfBook) {
                newPdfBook.mv('./public' + oldBookData.pdfUrl)
            }
           
            
         await runQuery(`UPDATE books SET title = '${bookTitle}' , description = '${bookDescription}' WHERE id = ${bookid};`+ deleteImgQuery + newImgsQuery)
                resolve()
                //await connect()
                // await Books.updateOne({_id : bookid}, {
                //         title: newBookTitle,
                //         description: bookDescription,
                //         imgs: [...keepImgs, ...newImgsUrlsArr],   // on this way we can join old and new images in one array                        
                //         $inc: {__v: 1}                        
                // })                
                //resolve()
           
        })()
    } catch (error) {
       reject(error)     
    }
    })
}
function deleteBook(bookid, userid) {
    return new Promise((resolve, reject) => {
         getBook(bookid).then(book => {
             //check if the book belong to the current login user
             if (book.userid === userid) {
                 //delete book images
                 book.imgs.forEach(img =>{
                     if (fs.existsSync('/public' + img)) {
                         fs.unlinkSync('./public' + img)
                     }
                 })
                 //delete pdf file
                 //check if pdf file is exist then deleted
                 if (fs.existsSync('/public' + book.pdfUrl)) {
                    fs.unlinkSync('./public' + book.pdfUrl)
                }
                //connect().then(() =>{
                    
                    Books.deleteOne({_id: bookid}).then(() =>{
                        
                        resolve()
                    }).catch(error =>{
                        
                        reject(error)
                    })
                // }).catch(error =>{
                //     reject(error)
                // })
           
             } else {
                 reject(new Error('hacking try,not his time'))
             }

    }).catch(error =>{
        reject(error)
    })
    
    })
   

    
}

module.exports = {
    registerUser,
    checkUser,
    addBook,
    getAllBooks,
    getBook,
    userBooks,
    UpdateBook,
    deleteBook
 }