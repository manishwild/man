let xhr = new XMLHttpRequest();
xhr.open('GET','/js/data.json');
xhr.send();

xhr.onload = function () {
   
if (xhr.status == 200) {
    let Data = JSON.parse(xhr.response)
    
        document.write('<img src= "'+Data.arrayOfProducts.imgUrl[1]+'" >'+"<br>")
        //document.write('ID: '+Data.name+'<br>')
        //document.write('Joke: '+Data.price + '<br>')
}else{
    
    console.log('Error Number : '+ xhr.status)
}
}