

async function getData(keyWords,page,num) {
    let url = 'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency'
let obj = {
    "requests":[
        {"indexName":"ikea","params":"query="+keyWords+"&hitsPerPage="+page+"&page="+num}
    ]
};
    let response = await fetch(url,{
        method:'POST',
        body: JSON.stringify(obj)
    })
    let data = await response.json()
    console.log(data)//after data i can display result any image inside it.using xhr
}
getData('che',10,1)