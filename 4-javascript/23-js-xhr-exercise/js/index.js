


  var appkey="12000491-41fc68d8c365df909e022ceb6";
function getData(key,keyWord,category,language,orientation,minHeight,minWidth,color,safe,orderType,page,perPage){
let url="https://pixabay.com/api/?key="+key+"&q="+keyWord+"&image_type=photo&category="+category+"&pretty=true"+(language!=""?"&lang="+language:"")+(orientation!=""?"&orientation="+orientation:"")+(language!=""?"&lang="+language:"")+(minHeight!=""?"&min_height="+minHeight:"")+(minWidth!=""?"&min_width="+minWidth:"")+(color!=""?"&colors="+color:"")+(safe!=""?"&safesearch="+safe:"")+(orderType!=""?"&order="+orderType:"")+(page!=""?"&page="+page:"")+(perPage!=""?"&per_page="+perPage:"");



let xhr = new XMLHttpRequest();
xhr.open('GET',url)

xhr.send();
xhr.onload = function () {
    if (xhr.status == 200) {
        let result = JSON.parse(xhr.response)
        console.log(result)
        let htmltext ='';
        // result.hits.forEach(product => {
        //     //document.write('<a href="'"+element.pageURL+" target="_blank"><img src= "+element.largeImageURL+" height="200" width="200" ></a>')
        //     //document.write('<a href="${element.pageURL}" target="_blank"><img src= ${element.largeImageURL} height="200" width="200" >`) 
            //htmltext += '<img width= 850 src = " ' +product.largeImageURL+ '">      <br>'  
            
        // });
        let i = 0;
        setInterval(() => {
            document.write('<img width=250  src = " ' +result.hits[i].largeImageURL+ '">'  )
            document.close()
            i++
            
            if(i == result.hits.length){
                i = 0
            }
        }, 2000);
         document.write(htmltext)

        


    }}
}
 



getData(appkey, prompt('enter keyword')) 