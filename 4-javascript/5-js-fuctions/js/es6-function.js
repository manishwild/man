// function blaFunction(){

// }

// let blaFunction = function(message){
//     console.log(msssage)
// }

// Es6 Arrow Function
let blaFunction = (message1,message2) => {
    console.log(message1 + "," + message2)
}

let blaFunction1 = message => {
    console.log(message)
}
blaFunction("Hi I an a New Function","Hi I an a New Parameter2");
blaFunction1("Hi I an a New Function");//if we doesnot use; it will thik iife function

(function () {
    console.log("Hi I am IIFE Function")
})()
