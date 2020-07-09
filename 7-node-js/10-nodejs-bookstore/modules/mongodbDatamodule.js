const passwordHash = require('password-hash')
const { MongoClient, ObjectID } = require('mongodb')
const { response } = require('./dataModule')
const connectionString = 'mongodb+srv://fbw5:123456abc@cluster0.wtcsm.mongodb.net/test1?retryWrites=true&w=majority'
const fs = require('fs')
function connect() {
    return new Promise((resolve,reject) =>{
        MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true}).then(client =>{
          resolve(client)
        }).catch(error =>{
            reject(error)
        })
    })
}

function registerUser(email,password) {
    return new Promise((resolve,reject) =>{
        connect().then(client => {
            const db = client.db('test1')
            db.collection('users').findOne({email:email}).then(user =>{
                if (user) {
                    client.close()
                    reject('exist')
                } else {
                    db.collection('users').insertOne({
                        email:email,
                        password:passwordHash.generate(password)
                    }).then(response =>{
                        client.close()
                        if (response.result.ok) {
                            resolve()
                        } else {
                            reject('can not insert')
                        }
                        
                    }).catch(error =>{
                        client.close()
                        reject(error)
                    })

                }
            }).catch(error =>{ 
                client.close()
               reject(error)
            })
        }).catch(error =>{
            reject(error)
        })
    })
}

function checkUser(email,password) {
    return new Promise((resolve,reject) =>{
        connect().then(client => {
            const db = client.db('test1')
            db.collection('users').findOne({email:email}).then(user => {
                if (user) {
                    if (passwordHash.verify(password,user.password)) {
                        resolve(user)
                    }else{
                        reject(3)
                    }
                } else {
                    reject(3)
                }
            }).catch(error =>{
                client.close()
                   reject(3)
            })
        }).catch(error =>{
            reject(error)
        })
    })
}

function addBook(bookTitle, bookDescription, bookPdf, bookImgs, userid) {
    return new Promise((resolve, reject) => {
        connect().then(client => {
          const db = client.db('test1')
          db.collection('books').findOne({title: bookTitle, userid: userid}).then(findBook => {
                if(findBook) {
                  client.close()
                  reject(3)
                } else {
                    // create images array to be saved in database
                    const imgsArr = []
                    bookImgs.forEach((img, idx) => {
                        // get file extension
                          let ext = img.name.substr(img.name.lastIndexOf('.'))
                          // set the new image name
                          let newName = bookTitle.trim().replace(/ /g, '_') + '_' + userid + '_' + idx + ext
                          img.mv('./public/uploaded/' + newName)
                          imgsArr.push('/uploaded/' + newName)
                    });
                    // set a new pdf file name
                      let pdfName = bookTitle.trim().replace(/ /g, '_') + '_' + userid + '.pdf'
                  // move the pdf file with the new name to uploadedfiles folder
                      bookPdf.mv('./public/uploaded/' + pdfName)
                  // set the pdf url that gonna be saved in the json file
                      let pdfNewUrl = '/uploaded/' + pdfName

                      db.collection('books').insertOne({
                          title: bookTitle,
                          description: bookDescription,
                          pdfUrl: pdfNewUrl,
                          imgs: imgsArr,
                          userid: userid
                      }).then(response => {
                          client.close()
                          if (response.result.ok) {
                              resolve()
                          } else {
                              reject(new Error('can not insert a book'))
                          }
                      }).catch(error => {
                          reject(error)
                      })
                }
            }).catch(error => {
              client.close()
              reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function getAllBooks() {
    return new Promise((resolve,reject) =>{
        connect().then(client => {
            const db = client.db('test1')
            db.collection('books').find().toArray().then(books => {
                //add id property to cach book instead od _ID
                books.forEach(book => {
                    //book.id = book._id
                    book['id'] = book['_id']
                 });    
                 client.close()
                resolve(books)
           
               
            
            }).catch(error =>{
                client.close()
                reject(error)
            })



        }).catch(error =>{
            reject(error)
        })

    })
}
function getBook(id) {
    return new Promise((resolve,reject) =>{
        connect().then(client => {
            const db = client.db('test1')
            db.collection('books').findOne({_id : new ObjectID(id)}).then(book => {
                //add id property to cach book instead od _ID
                
                if (book) {
                    book.id = book._id
                    resolve(book)
                     client.close()
                } else {
                    reject(new Error('Cannot find a book with this id ; ' + id))
                }
                   
                   
                     
                
                
           
               
            
            }).catch(error =>{
                client.close()
                reject(error)
            })



        }).catch(error =>{
            reject(error)
        })

    })
}

function userBooks(userid) {
    
    return new Promise((resolve,reject) =>{
        connect().then(client => {
            const db = client.db('test1')
            db.collection('books').find({userid: userid}).toArray().then(books => {
                //add id property to cach book instead od _ID
                books.forEach(book => {
                    //book.id = book._id
                    book['id'] = book['_id']
                 });    
                 client.close()
                resolve(books)
           
               
            
            }).catch(error =>{
                client.close()
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
            let updateNum = 1
            if (oldBookData.update) {
                updateNum = oldBookData.update + 1
            }
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
                const newImgName = bookTitle.trim().replace(/ /g,'_') + '_' + userid + '_' + idx + '_' + updateNum + imgExt
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
            const client = await connect()
            const db = client.db('test1')
            const result = await db.collection('books').updateOne({_id: new ObjectID(bookid)},{
                $set:{
                    title:bookTitle,
                    description: bookDescription,
                    imgs:[...keepImgs,...newImgsUrlArr],
                    update: updateNum
                }
            })
            resolve()
        })()
    } catch (error) {
       reject(error)     
    }
    })
}
module.exports = {
    registerUser,
    checkUser,
    addBook,
    getAllBooks,
    getBook,
    userBooks,
    UpdateBook
 }