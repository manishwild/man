const express = require('express')

const dataModule = require('../modules/mongooseDataModule');

const adminRoute = express.Router()
// error no 10 means season is over

adminRoute.use((req, res, next) => {
    if (req.session.user) {
        next()
    } else {
       switch (req.method.toUpperCase()) {
           case 'GET':
               res.redirect('/login')
               break;
            case 'POST':
                res.json(10)
                break;       
       
           default:
               res.json('nothing to be shown')
               break;
       }
        
    }
});

// adminRoute.get('/', (req, res) => {
//     res.render('admin',{email:req.session.user.email})
// });

// adminRoute.get('/addbook', (req, res) => {
    
//     res.render('addbook')
// });


adminRoute.post('/addbook', (req, res) => {

    //responses map
    // 1 book saved successfully
    // 2 data error
    // book title exist
    // server side error
    // console.log(req.body)
    // console.log(req.files);
    // console.log(Object.keys(req.files));
    if (req.files) {
        
    
    
    const bookTitle = req.body.bookTitle
    const bookDescription = req.body.bookDescription
    const bookPdf = req.files.bookPdf

    if (bookTitle && bookDescription && bookPdf && Object.keys(req.files).length > 1) {
        const imgs = []
        for (const key in req.files) {
            if (req.files[key].mimetype != 'application/pdf') {
                imgs.push(req.files[key])
                
            }
        }
        dataModule.addBook(bookTitle, bookDescription, bookPdf, imgs, req.session.user._id).then(()=>{
            res.json(1)
        }).catch(error =>{
            if (error == 3) {
                res.json(3)
            } else {
                res.json(4)
            }
            
        })

        
    } else {
        res.json(2)
       
    }
    } else {
        res.json(2) 
    }
    
   
    

});

adminRoute.post('/mybooks', (req, res) => {
   
    dataModule.userBooks(req.session.user._id).then(books =>{
        //res.render('mybooks',{books})
        res.json(books)

    }).catch(error =>{
        res.json()
    })
});



// adminRoute.get('/logout', (req, res) => {
//     req.session.destroy()
//     res.redirect('/login')
// });



// adminRoute.get('/mybook/:id', (req, res) => {
//     const bookid = req.params.id
//     dataModule.getBook(bookid).then(book =>{
//         res.render('editbook',{book})
//     }).catch(error =>{
//         res.send('404.this book is not exit')
//     })
    
// });


adminRoute.post('/editbook', (req, res) => {
    const {bookTitle,oldImgsUrls,bookDescription,bookid} = req.body
    //console.log(bookTitle,oldImgsUrls,bookDescription,bookid);
    console.log(req.files);
    let newPdfBook = null
    let newImgs = []
    if (req.files) {
        newPdfBook = req.files.bookPdf
        for(const key in req.files){ 
            if (req.files[key].mimetype != 'application/pdf') {
                newImgs.push(req.files[key])
            }
        }
    }
    let oldImgsUrlArr = JSON.parse(oldImgsUrls)
    //console.log(oldImgsUrlArr);
    //delete the domain from the imgs url
    oldImgsUrlArr = oldImgsUrlArr.map(element => {
        return element.substr(element.indexOf('/uploaded/'))
        console.log(element);
        
    });
    //console.log(oldImgsUrlArr);
    
    dataModule.UpdateBook(bookid, bookTitle,oldImgsUrlArr, bookDescription, newPdfBook, newImgs, req.session.user._id).then((book) => {
        res.json(book)
    }).catch(error =>{
        if(error === 'hack'){
            res.json(100)
        }else{
            res.json(2)
        }

    })
   
    
   
});

 adminRoute.post('/deletebook', (req, res) => {
       let bookid = req.body.bookid
       dataModule.deleteBook(bookid,req.session.user._id).then(() => {
           res.json(1)
       }).catch(error =>{
           res.json(2)
       })
       
       
    });

module.exports = adminRoute