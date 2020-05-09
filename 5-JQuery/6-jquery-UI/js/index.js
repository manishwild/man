$(document).ready(function () {
    $( ".list" ).sortable({
        axis: "y",//allow the moment axis
        cancel:'.unsortable',//prevent elemnts with the sortacl
        handle:'span',
        stop:function (event,ui) {
            //console.log(ui);
            //alert('drop')
            if (checkOrder()) {
                alert('you did it')
            }
            


        }
      })

      //check order function
      function checkOrder() {
          let check = true
          
        $( ".list>li>h2" ).each((index, item) => { 
             //console.log($(item).text());
             if((index + 1)+"" != $(item).text()) {
                 check = false
             }
             
        });
        return check
      }
       
});