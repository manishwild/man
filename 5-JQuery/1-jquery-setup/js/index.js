//$(selector).method()
//alternative window onload

$(document).ready(function () {
   
});
//diffrent way
$(function () { 

 })
 
 
  $(document).ready(function(){
      //addevent to btn
    $("#btn").click(function(){
      $(".someDiv").toggle(500);
      //check btn content to set the text
      if ($(this).text() == 'Hide') {
        $(this).text('Show')
      }else{
        $(this).text('Hide')
      }
    });
    
  });