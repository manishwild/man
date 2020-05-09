$(document).ready(function () {
    // $.ajax({
    //     type: "method",//get,post,update
    //     url: "url",//the url ./data.json
    //     data: "data",//data to send
    //     dataType: "dataType",//data type json,text
    //     success: function (response) {
            
    //     }
    // });
    $.ajax({
        type: "GET",
        url: "./data.json",
        
        success: function (response) {
            console.log(response);
            
        },
        error:function (error) {
           console.log(error);
            
        }
    });
    let obj = {
        "requests":[
            {"indexName":"ikea","params":"query=chair&hitsPerPage=100&page=1"}
        ]
    };

    

    $.ajax({
        type: "POST",
        url: "https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency",
        data: JSON.stringify(obj),
        dataType: 'json',
        success: function (response) {
            console.log(response.results[0].hits);
            console.log(response.results[0].hits[0].name);
            console.log(response.results[0].hits[0].rating);
            console.log(response.results[0].hits[0].price);
            console.log(response.results[0].hits[0].image);
            //let imgs = response.results[0].hits[0].image


            // $.each(response.results[0].hits, function (index, value) { 
            //     // document.write(response.results[0].hits[0].name);
            //      //$('#container').replaceWith($('#container').html(response.results[0].hits[0].name))
            //      //$("#container").html(response.results[0].hits[0].name)
            //      let img = document.createElement('img')
                 
                 
            // });
            let dataArr = response.results[0].hits
            let container = $('.container')
            dataArr.forEach(product => {
                //lethtmlstring = ``
                let htmlstring = '<div class="product">'+
            '<div>'+product.name+'</div>'+
            '<div>'+
            '<span class="gray"></span>'+   
            '<span class="gray"></span>'+
            '<span class="gray"></span>'+
            '<span class="gray"></span>'+
            '<span class="gray"></span>'+
        '</div>'+
            '<div>'+ product.price+'Euro </div>'+
            '<div>'+
               '<img src="'+product.image+'" alt="" width="100px">'+
            '</div>'+
        '</div>'
        //important convert string to jquery Dom element
        let htmlProduct = $(htmlstring)

        //create rate stars
        htmlProduct.find('div>span').each((idx,star) => {
            if(idx + 1 <= product.rating){
                $(star).addClass('gold');
                $(star).removeClass('gray');
            }
        })
        container.append(htmlProduct)



            });
            
        }
        

    });




});
