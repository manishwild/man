 export const registerPost = (email, password, repassword) => {
     const sendData = {
         email,
         password,
         repassword
     }
     return new Promise((resolve, reject) => {
         fetch('/register', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(sendData)
         }).then(response => {
             if (response.status === 200) {
                 response.json().then(recivedData => {
                     resolve(recivedData)
                 }).catch(error => {
                     reject(error)
                 })
             } else {
                 reject(new Error('Cannot send data to server. response number is: ' + response.status))

             }
         }).catch(error => {
             reject(error)
         })
     })

 }

 export const loginPost = (email, password) => {
     return new Promise((resolve, reject) => {
         const data = {
             email,
             password
         }
         fetch('/login', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(data)
         }).then(response => {
             if (response.status === 200) {
                 response.json().then(recivedData => {
                     resolve(recivedData)
                 }).catch(error => {
                     reject(error)
                 })
             } else {
                 reject(new Error('Cannot send data to server. response number is: ' + response.status))

             }
         }).catch(error => {
             reject(error)
         })
     })

 }

 export const addBookPost = (bookTitle, bookDescription, bookPdf, bookImgs) => {
    return new Promise((resolve, reject) => {
        const fd = new FormData()
        fd.append('bookTitle', bookTitle)
        fd.append('bookDescription', bookDescription)
        for (let i = 0; i < bookImgs.length; i++) {
            fd.append('bookImg' + i, bookImgs[i])
        }
        fd.append('bookPdf', bookPdf)

        fetch('/admin/addbook', {
            method: 'POST',
            body: fd
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(new Error('cannot send the data, response number is: ' + response.status))
            }
        }).catch(error => {
            reject(error)
        })
    })
 }

 export const allBookPost = () => {
    return new Promise((resolve, reject) => {
        fetch('/getallbooks',{
            method:'Post',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(new Error('cannot send the data, response number is: ' + response.status))
            }
        }).catch(error => {
            reject(error)
        })
    })
 }

 export const getBookPost = (bookId) => {
     return new Promise((resolve, reject) => {
         const data = {
             id:bookId
         }
         fetch('/getbook',{
            method:'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(new Error('cannot  get the data, response number is: ' + response.status))
            }
        }).catch(error => {
            reject(error)
        })
     })
 }

 export const myBooksPost = () => {
    return new Promise((resolve, reject) =>{
        fetch('/admin/mybooks',{
            method:'Post',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(new Error('cannot  get the data, response number is: ' + response.status))
                }
        }).catch(error => {
            reject(error)
        })
    })
 }


 export const deleteBookPost =(bookid) => {
    return new Promise((resolve, reject) =>{
        const data = {
            bookid
        }
        fetch('/admin/deletebook',{
            method:'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(new Error('cannot  get the data, response number is: ' + response.status))
                }
        }).catch(error => {
            reject(error)
        })
    })
 }

 export const editBookPost =(bookTitle, bookDescription,bookOldImgs,bookNewImgs,bookPdf,bookid) => {
    return new Promise((resolve, reject) => {
        const fd = new FormData()
        fd.append('bookid', bookid)
        fd.append('bookTitle', bookTitle)
        fd.append('oldImgsUrls',JSON.stringify(bookOldImgs))
        
        for (let i = 0; i < bookNewImgs.length; i++) {
            fd.append('bookImg' + i, bookNewImgs[i])
            
        }
        if (bookPdf) {
            fd.append('bookPdf', bookPdf)
        }
        fd.append('bookDescription', bookDescription)

        fetch('/admin/editbook',{
            method:'Post',
            body:fd
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(new Error('cannot  get the data, response number is: ' + response.status))
                }
        }).catch(error => {
            reject(error)
        })

    })
  
 }