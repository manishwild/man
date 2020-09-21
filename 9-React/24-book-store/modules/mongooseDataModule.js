const passwordHash = require('password-hash')
//const { MongoClient, ObjectID } = require('mongodb')
const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://fbw5:123456abc@cluster0.wtcsm.mongodb.net/test1?retryWrites=true&w=majority'
const {Schema} = mongoose
const fs = require('fs')
const { log } = require('console')
//user schema
const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    }, 
    password:{
        type: String,
        required: true
    }
    
})

//book schema
const bookSchema = new Schema({
    title:{
        type: String,
        required: true,
        
    }, 
    description:{
        type: String
    },
    pdfUrl:{
        type: String,
        required: true
    },
    imgs:{
        type: [String],
        required: true,
        min: 1
    },
    userid:{
        type: String,
        required: true
    }
})
//create user modal
const Users = mongoose.model('users',userSchema)
//create a book
const Books = mongoose.model('books',bookSchema)
function connect() {
    return new Promise ((resolve, reject) =>{
     if (mongoose.connection.readyState === 1) {
        resolve()
    } else {
        mongoose.connect(connectionString , {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true
        }).then(() =>{
            resolve()
        }).catch(error =>{
            reject(error)
        })
    }
    })
   
}
function registerUser(email,password) {
    return new Promise((resolve,reject) =>{
        connect().then(() => {
            //create new user
            const newUser = new Users ({
            email:email,
            password: passwordHash.generate(password)
        })
        //save the new user in the database
        newUser.save().then(result => {
            console.log(result);     
            resolve()
        }).catch(error => {
            console.log(error.code);
            if (error.code === 11000) {
                reject('exist')
            } else {
                 reject(error)
            }    
           
        })

   
        }).catch(error =>{
            reject(error)
        })
    })  
    
}

function checkUser(email,password) {
    return new Promise((resolve,reject) =>{
        connect().then(() => {
           Users.findOne({email:email}).then(user =>{
                if (user) {
                    if (passwordHash.verify(password, user.password)) {
                        resolve(user)
                    }else{
                        reject(3)
                    }
                } else {
                    reject(3)
                }
               
            }).catch(error => {
                reject(error)
        })
    }).catch(error =>{
            reject(error)
        })
})
}

function addBook(bookTitle, bookDescription, bookPdf, bookImgs, userid) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
         
         Books.findOne({title: bookTitle, userid: userid}).then(findBook => {
                if(findBook) {
                  
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

                      const newBook = new Books({
                        title: bookTitle,
                        description: bookDescription,
                        pdfUrl: pdfNewUrl,
                        imgs: imgsArr,
                        userid: userid
                      })

                      newBook.save().then(response => {
                         
                          
                              resolve()
                          
                      }).catch(error => {
                          reject(error)
                      })
                }
            }).catch(error => {
              
              reject(error)
            })
        }).catch(error => {
            reject(error)
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