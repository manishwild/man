function foo1() {
    return new Promise((reslove,reject) => {
        setTimeout(() => {
            reslove('foo1 is done')
        }, 1000);
    })
}

function foo2() {
    return new Promise((reslove,reject) => {
        setTimeout(() => {
            reslove('foo2 is done')
        }, 2000);
    })
}

function foo3() {
    return new Promise((reslove,reject) => {
        setTimeout(() => {
            reslove('foo2 is done')
        }, 3000);
    })
}

// (async()=>{
//     const result1 = await foo1()
//     console.log(result1);
//     const result2 = await foo2()
//     console.log(result2);
//     const result3 = await foo1()
//     console.log(result3);
// })

const promise1 = foo1()
const promise2 = foo2()

Promise.all([promise1,promise2]).then( results =>{


    console.log(results);
    foo3().then(result3 =>{
        console.log(result3
            );
        

    })
    
})