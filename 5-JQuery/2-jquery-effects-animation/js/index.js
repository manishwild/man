
$(document).ready(function () {
    //$(selector).animate(object option)
    //$(selector).animate(object option,time)
    //$(selector).animate(object option,time,callback)
    //option the styles that will be changed
    //time by milliseconds
    //callback is a function will run after finishing the animation
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
    $('#someDiv').mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        $(this).stop();
    });
});