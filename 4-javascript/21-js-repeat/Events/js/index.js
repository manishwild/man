// function wh(){
// let promise = new Promise(function(resolve,reject){
// setTimeout(function() {
//     resolve("Hello")
// }, 1000);
//     //return promise
// })
//     return promise
//    }
// wh().then(function(v){
// console.log(v)
// console.log("world")
// })
 //____________________________________________//
 function wh(value, ccc) {
    setTimeout(function() {
        ccc(value)
    }, 1000)
}
wh("hello", rebecca)
function rebecca(whatever) {
    console.log(whatever)
}