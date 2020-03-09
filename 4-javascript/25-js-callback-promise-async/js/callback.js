// function SayHello(cb) {
//     setTimeout(() => {
//         console.log('Hello')
//         cb()
//     }, 1000);
// }
// SayHello(()=>{
//     console.log("World")
// })
function SomeFun(word,cb) {
    cb()
    console.log(word)
    
}

SomeFun('hi',()=> {
    console.log('I am call back Functiom')
})