let study2Hour = true

let ahmadPromise = new Promise((resolve,reject)=>{
    if (study2Hour) {
        resolve('You will be good Developer')
    } else {
        reject ('He did not know, may be you will susceed or you will bnot')
    }
})
ahmadPromise.then(message =>{
    console.log(message)
}).catch(error =>{
    console.log(error)

})