$(document).ready(function () {
    $('.collapse > h2>span').click(function (e) { 
        e.preventDefault();
        $('.collapse > div').slideUp(1000);
        //$(this).parent().next().slideToggle()
       
        //********change switch + & -********************* (: else)

    //    $('.collapse > h2>span').html('+')
    //     $(this).html('-')
    // $('.collapse > h2>span').text('+')
    // $(this).text('-')
    //************************************************************ */
    //$(this).text()=='-'? $(this).text('+'):$(this).text('-')
    //$(this).text()=='-'? $(this).parent().next().slideDown():$(this).parent().next().slideUp() we use this code up to make it short

    let currentText = $(this).text()
    $('.collapse > h2>span').text('+')
    currentText=='-'? $(this).text('+').parent().next().slideUp():$(this).text('-').parent().next().slideDown()
    //$(this).text()=='-'? $(this).parent().next().slideDown():$(this).parent().next().slideUp() we use this code up to make it short
    
    //same thing using normal if statement********************************************
    // if ( currentText =='-' ) {
    //     $(this).text('+').parent().next().slideUp()
    // } else {
    //     $(this).text('-').parent().next().slideDown()
    // }




    });  
});