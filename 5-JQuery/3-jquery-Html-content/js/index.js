$(function () {
    //add click event to btn 
    $('#btn').click(function (e) { 
        e.preventDefault();
        let message = $('#somediv > p').text()
        alert(message)
    });
    //add click event to btn1
    $("#btn1").click(function (e) { 
        e.preventDefault();
        $('#somediv > h2').text('hello fbw5')
    });
    //add click event to btn2
    $("#btn2").click(function (e) { 
        e.preventDefault();
        let message = $('#somediv').html()
       alert(message)
    });
   //add click event to btn3
   $("#btn3").click(function (e) { 
    e.preventDefault();
    $('#somediv>p').html('i am <strong>strong</strong>')
   
});
//add click event to btn4
$("#btn4").click(function (e) { 
    e.preventDefault();
    let message = $('#somediv>input').val();
       alert(message)
});
//add click event to btn5
$("#btn5").click(function (e) { 
    e.preventDefault();
    let message = $('#somediv>input').val('the new value');
    
});
//add click event to btn6
$("#btn6").click(function (e) { 
    e.preventDefault();
    let message = $('#somediv>p').append('i m extra <b>text</b>');
    
});
//add click event to btn7
$("#btn7").click(function (e) { 
    e.preventDefault();
    let message = $('#somediv>p').after('<p>i m  <b>text</b> after input</p>');
    
});
//add click event to btn8
$("#btn8").click(function (e) { 
    e.preventDefault();
    let message = $('#somediv>p').before('<p>i m text after input</p>');
    
});
//add click event to btn9
$("#btn9").click(function (e) { 
    e.preventDefault();
    $('#somediv>p').remove();
    
});
//add click event to btn10
$("#btn10").click(function (e) { 
    e.preventDefault();
    $('#somediv').empty();
    
});
    
});