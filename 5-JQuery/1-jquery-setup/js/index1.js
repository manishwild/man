$(document).ready(function () {
    $("#btn").click(function (e) { 
        e.preventDefault();
        $('.div1').fadeIn(2000);
    });
    $("#btn1").click(function (e) { 
        e.preventDefault();
        $('.div1').fadeOut(2000);
    });

    $('.collapseTitle > a').click(function (e) { 
        e.preventDefault();
        $('.collapseContent').slideToggle();
    });
});
//fadetoggle u can do this two in one btn