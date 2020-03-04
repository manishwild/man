// let somePromise = new Promise((resolve,reject)=>{
//     if (true) {
//         resolve('hi')
//     } else {
//         reject('there is in error')
//     }
// });

// somePromise.then((value)=>{
//     console.log(value)
// }).catch((value) =>{
//     console.log(value)
// })

let somePromise = new Promise((resolve,reject)=>{
    let xhr = new XMLHttpRequest();
xhr.open('GET','/js/data.json');
xhr.send();

xhr.onload = function () {
   
    if (xhr.status == 200){
        resolve(xhr.response)
    }else {
        reject('connection problem')

    }
  }
    });

somePromise.then(theResponse => {
    console.log(theResponse)
}).catch(error=> {
   console.log(error)})