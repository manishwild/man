 export const registerPost = (email,password,repassword) => {
    const sendData = {
        email,
        password,
        repassword
    }
    return new Promise((resolve,reject) => {
        fetch('/register',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(sendData)
    }).then(response => {
        if (response.status === 200) {
            response.json().then(recivedData => {
                resolve(recivedData)
            }).catch(error => {
                reject(error)
            })
        } else{
            reject(new Error('Cannot send data to server. response number is: ' + response.status))

        }
    }).catch(error => {
        reject(error)
    })
    })
    
}