//how jquery is build
// function $(selector) {
//     return document.querySelector(selector)
// }
// $(selector)

$(document).ready(function () {
    //get parents
    $('#btn').click(function (e) { 
        e.preventDefault();
        alert($('h2').parent().text())
    });
    //get childern
    $('#btn1').click(function (e) { 
        e.preventDefault();
        alert($('p').children().text())
    });
    //get next element
    $('#btn2').click(function (e) { 
        e.preventDefault();
        alert($('h2').next().text())
    });
    //get previous element
    $('#btn3').click(function (e) { 
        e.preventDefault();
        alert($('p').prev().text())
    });

    //get parents
    $('#btn4').click(function (e) { 
        e.preventDefault();
        //console.log($('span').parents()[1])
        console.log($('span').parents())
        console.log($('span').parentsUntil('body'))
    });


});