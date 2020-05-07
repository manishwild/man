// $(document).ready(function() {

//     function checkWidth() {
//        var windowWidth = $(window).width();
//        if (windowWidth <= 500) {
//            $("nav>div>div").hide();
//        } else {
//            $("nav>div>div").show();
//        }
//     }
//     checkWidth();
   
//     $(window).resize(checkWidth);
//    });

$(document).ready(function () {
    $("nav>div>div").click(function (e) { 
        e.preventDefault();
        $("nav>ul").slideToggle();
    });
    $(window).resize(function () { 
        if($('nav').width()>=500){
            $('nav>ul').fadeIn();
        }else{
            $('nav>ul').fadeOut();
        }
    });
});