let xhr = new XMLHttpRequest();
xhr.open('GET','/js/data.json');
xhr.send();

xhr.onload = function () {
   
if (xhr.status == 200) {
    //console.log(xhr.response)
    let Products = JSON.parse(xhr.response).arrayOfProducts
    for (let i = 0; i < Products.length; i++) {
        let productHtml = (i + 1)+ '   <img src= "'+Products[i].imgUrl+'"width="50" >';
        productHtml += '    ' +Products[i].name;
        productHtml += '<sub><del>  ' +(Products[i].price*2) + 'Euro</del></sub>';
        productHtml += '<b>  ' +Products[i].price + 'Euro</b><br>';
        document.write(productHtml)
        
    }
    document.close()

    // Products.forEach(Product => {
    //     let productHtml = '<img src= "'+Product.imgUrl+'"width="50" >';
    //     productHtml += '    ' +Product.name;
    //     productHtml += '<sub><del>  ' +(Product.price*2) + 'Euro</del></sub>';
    //     productHtml += '<b>  ' +Product.price + 'Euro</b><br>';
    //     document.write(productHtml)
    // });
}
}