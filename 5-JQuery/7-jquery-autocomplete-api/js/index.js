// $(document).ready(function () {
//     var availableTags = [
//         "chair",
//         "table",
//         "lamp",
//         'chips',
//         'frame'
//     ];
//     $( "#productInput" ).autocomplete({
//         source: availableTags
//     });
    
//     console.log(productInput.value);
//     $('#productInput').keyup(function (e) {
//         $('.container').empty();
//         console.log(this.value);
//         let obj = {
//             "requests":[
//                 {"indexName":"ikea","params":"query="+this.value+"&hitsPerPage=5&page=1"}
//             ]
//         }
//         $.ajax({
//             type: "POST",
//             url: 'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency',
//             data: JSON.stringify(obj),
//             dataType: "json",
//             success: function (response) {
//                 let dataArr = response.results[0].hits;
//                 // console.log(dataArr);
//                 let container = $('.container');
//                 $(dataArr).each(function (idx, product) {
//                     let htmlString =
//                     `<div class="product">
//                         <div>${product.name}</div>
//                         <div>
//                             <span class="gray"></span>
//                             <span class="gray"></span>
//                             <span class="gray"></span>
//                             <span class="gray"></span>
//                             <span class="gray"></span>
//                         </div>
//                         <div>${product.price}</div>
//                         <div>
//                             <img src="${product.image}" width="100">
//                         </div>
//                     </div>`
//                     // convert string to jQuery DOM element
//                     let htmlProduct = $(htmlString);
//                     // create star-rating
//                     htmlProduct.find('div>span').each((idx, star) => {
//                         if (idx+1 <= product.rating) {
//                             $(star).addClass('gold');
//                             $(star).removeClass('gray');
//                         }
//                     })
//                     $(container).append(htmlProduct);
//                 });
//             },
//             error: function (error) {
//                 console.log(error);
//             },
//         });
//     });
// });
// dummy data for testing and to build the ui or front end 
let availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];

$( function() {
    

    // add keyup event to the input
$('#productInput').keyup(function (e) { 
    //console.log($(this).val());
    let keyWord = $(this).val();
    // check if the input value length => 3
    if(keyWord.length >= 2){
        // buld the object that gonna be send to API
        let obj = {
            "requests":[
                {"indexName":"ikea","params":"query="+keyWord+"&hitsPerPage=5&page=1"}
            ]
        };
        // ajax request
        $.ajax({
            type: "POST",
            url: "https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency",
            data: JSON.stringify(obj),
            dataType: "json",
            success: function (response) {
                // if success call autocomplete function
                let dataset = response.results[0].hits.map(element => element.type)
                //console.log(dataset);
                
                runAutoCompleate(dataset)
            }
        }); 
    } else {
        // $( "#productInput" ).autocomplete( "disable" );

    }
    
    
});
    

    
  } );

  // function will run the auto complete in jquery
  function runAutoCompleate(data) {
      

    $( "#productInput" ).autocomplete({
        source: data,
        classes: {
          "ui-autocomplete": "autocompleteclass"
        },
        messages: {
			noResults: "",
			results: function( amount ) {
				return "";
			}
		}

      });
    }