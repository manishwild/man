function norris(cb) {
let xhr = new XMLHttpRequest();
xhr.open('GET','https://api.chucknorris.io/jokes/random');
xhr.send();

xhr.onload = function () {
    if (xhr.status == 200) {
        //console.log(xhr.response)
        let result = JSON.parse(xhr.response)
        //cb(JSON.parse(xhr.response).value)
        cb(result.value)
        
        
}else{
    return'there is error'
}
} 

}norris(callBackFun)

function callBackFun(toPrint) {
    console.log(toPrint)
}



