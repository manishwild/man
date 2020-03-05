

function getProducts(keyWords,page,num) {
    let xhr = new XMLHttpRequest();
xhr.open('POST','https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency')
//xhr.send();
let obj = {
    "requests":[
        {"indexName":"ikea","params":"query="+keyWords+"&hitsPerPage="+page+"&page="+num}
    ]
};
xhr.send(JSON.stringify(obj));
xhr.onload = function () {
    if (xhr.status == 200) {
        let resul = JSON.parse(xhr.response)
        console.log(resul)
        console.log(resul.results[0].hits[0])
        let htmltext ='';
        resul.results[0].hits.forEach(product => {
            htmltext += product.name + '           '
            htmltext += product.description + '           '
            htmltext += product.price +'Euro'+'     '    
            htmltext += '<img src = " ' +product.image + '">      <br>'  
            
        });
        document.write(htmltext)
        


        //console.log(JSON.parse(xhr.response))
    }else{
        console.log(xhr.status)

    }
}
}
//let enteredText = prompt('enter a searchword')//indirect way
//console.log(enteredText)
getProducts(prompt('Enter A Searchword'),prompt('value'),prompt('enter a page'))//short cut way direct way
