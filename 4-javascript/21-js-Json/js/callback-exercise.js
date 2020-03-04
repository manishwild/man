// function funwithDelay(num,cb) {
//     setTimeout(() => {
//        cb(num * 2) 
//     }, 2000);
// }
// funwithDelay(5,callBackFun)
// function callBackFun(num1) {
//    console.log(num1) 
// }
function funwithDelay(num, callBackFun) {
    setTimeout(() => {
       callBackFun(num * 2) 
    }, 2000);
}
funwithDelay(5, callBackFun)
function callBackFun(num1) {
   console.log(num1) 
}