let grade = 60
let stop1Year = false
let apromis = new Promise((resolve,reject)=>{
    if(grade >= 60){
        resolve('You will be software developre')
    }else{
        reject('you will be software assistant')
    }
})
let apromis1 = new Promise((resolve,reject)=>{
    if(stop1Year){
        resolve(true)
    }else{
        reject(false)
    }
})
apromis.then(message =>{
    apromis1.then(() =>{
        console.log('you stopped one year so you are an assistant now')
    }).catch(() =>{
        console.log(message)
    })
    //console.log(message)
}).catch(error =>{
    apromis1.then(message =>{
        console.log(message)
    }).catch(() =>{
        console.log('you stoped one year so you need to study again')
    })
    console.log(error)
})


async function check() {
    let message = await apromis
    let message1 = await apromis1
    console.log(message)
    console.log(message1)
}
check()
