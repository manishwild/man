
// let xhr = new XMLHttpRequest();
// xhr.open('GET','/js/data.json');
// xhr.send();
// let d = new Date()
//     console.log(d.getMilliseconds())
// console.log(xhr.response)
// xhr.onload = function () {
//     let d = new Date()
//     console.log(d.getMilliseconds())
//     //console.log(xhr.status)
// //console.log(xhr.response)
// //xhr.status response number 200 is ok,404 is page not found,500 server is down
// if (xhr.status == 200) {
//     console.log('All good ')
//     console.log(xhr.statusText)
    
//     //xhr.response data coming back from server
//     console.log(xhr.response)
// }else{
//     console.log(xhr.statusText)
//     console.log('Error Number : '+ xhr.status)
// }
// }

let xhr = new XMLHttpRequest();
xhr.open('GET','https://api.chucknorris.io/jokes/random');
xhr.send();
xhr.onload = function () {
    if (xhr.status == 200) {
        //console.log(xhr.response)
        let Data = JSON.parse(xhr.response)
        console.log(Data.created_at)
        console.log(Data.value)
        document.write('<img src= "'+Data.icon_url+'" >'+"<br>")
        document.write('ID: '+Data.id+'<br>')
        document.write('Joke: '+Data.value + '<br>')
}else{
    console.log('Error Number is : '+ xhr.status)
}
}




    
    
      

  
