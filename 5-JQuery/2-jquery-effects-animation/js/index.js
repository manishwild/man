
$(document).ready(function () {   
    //$(selector).animate(object option)
    //$(selector).animate(object option,time)
    //$(selector).animate(object option,time,callback)
    //option the styles that will be changed
    //time by milliseconds
    //callback is a function will run after finishing the animation
    //click event btn
    $('#btn').click(function (e) { 
        e.preventDefault();
        $("#someDiv").animate({
            left: '300px',
            //opacity:'0,3',
            backgroundColor: "#aa0000",
            color: "#fff",
        },3000,function () {
            alert('Done')
        })
    });
    //mouse mover event for some div
    $('#someDiv').mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        $(this).stop();
    });

    function goBack() {
        $(".container >div:nth-child(1)").animate({
            left: '0px'
        },2000,comeBack);
    }
    function comeBack () {
        $(".container >div:nth-child(1)").animate({
            left: '350px'
        },2000,goBack);
    }
    comeBack()    
    //change method
    $('.chainDiv').animate({
        height:'200px',
    },1000)
    .slideUp(2000)
    .text('Hello I m')
    .slideDown(1000)
    .fadeOut(1111,function () {
        alert('hi')
    }) 
        
        
});