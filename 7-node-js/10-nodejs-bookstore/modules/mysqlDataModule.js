const passwordHash = require('password-hash')
//const { MongoClient, ObjectID } = require('mongodb')
const mySql = require('mysql')

const fs = require('fs')
const { log } = require('console')

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
        connect().then(() => {           
            Books.find().then(books => {
                //add id property to cach book instead od _ID
                books.forEach(book => {
                    //book.id = book._id
                    book['id'] = book['_id']
                 });     
                resolve(books)
            }).catch(error =>{
                reject(error)
            })
        }).catch(error =>{
            reject(error)
        })

    })
}
function getBook(id) {
    return new Promise((resolve,reject) =>{
        connect().then(() => {
            
            Books.findOne({_id : id}).then(book => {
                //add id property to cach book instead od _ID
                
                if (book) {
                    book.id = book._id
                    resolve(book)
                     
                } else {
                    reject(new Error('Cannot find a book with this id ; ' + id))
                }
                                               
            }).catch(error =>{
               
                reject(error)
            })

        }).catch(error =>{
            reject(error)
        })

    })
}

function userBooks(userid) {
    
    return new Promise((resolve,reject) =>{
        connect().then(() => {
            
            Books.find({userid: userid}).then(books => {
                //add id property to cach book instead od _ID
                books.forEach(book => {
                    //book.id = book._id
                    book['id'] = book['_id']
                 });    
                
                resolve(books)
           
               
            
            }).catch(error =>{
               
                reject(error)
            })



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
            const newImgsUrlArr = []
            newImgs.forEach((img,idx) => {
                const imgExt = img.name.substr(img.name.lastIndexOf('.'))
                const newImgName = bookTitle.trim().replace(/ /g,'_') + '_' + userid + '_' + idx + '_' + (oldBookData.__v+1) + imgExt
                newImgsUrlArr.push('/uploaded/' + newImgName)
                img.mv('./public/uploaded/' + newImgName)
            });
            // delete the deleted img file from the system
            deletedImgs.forEach(file => 
                {if (fs.existsSync('./public' + file)) {
                fs.unlinkSync('./public' + file)
            } 
                
            });
            // check if user upload a new pdf file and move it to the same place to the old one so it will overwrite it
            if (newPdfBook) {
                newPdfBook.mv('./public' + oldBookData.pdfUrl)
            }
           
            
          await Books.updateOne({_id: bookid},{
                $set:{
                    title:bookTitle,
                    description: bookDescription,
                    imgs:[...keepImgs,...newImgsUrlArr],
                    $inc: { __v: 1 }
                }
            })
            resolve()
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