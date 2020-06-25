function getData() {
    let x;
    const somePromise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            
            try {
                x = "i am data"
                resolve(x)
            } catch (error) {
                reject(error)
            }
        }, 2000);
    })
    return somePromise
}

//let result = getData()
//console.log(result)
// getData().then(data =>{
//     console.log(data);
    
// }).catch(error =>{
//     console.log(error);
    
// })

//iife function self-invoking function(it will be called itself)
// (async()=>{
//     let something = await getData()
//     console.log(something);
    
// })

async function normalFunc() {
  let someThing = await getData()  
  console.log(someThing);
  
}
normalFunc()