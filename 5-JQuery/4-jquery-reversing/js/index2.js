$(function () {
    
    let htmlString = '<div><p>Hello FBW5 in JQUERY<a href="#">click me</a> </p></div><script>alert("i m java inside html")</script>'
    let smallDom = $(htmlString)
    smallDom.find('a').click(function (e) { 
        e.preventDefault();
        alert('Hello')
    });
    let btn = document.createElement('button')
    //btn.innerText ='button'
    $(btn).text('hi')
    
    
    $('#container').append(smallDom)
    $('#container').append(btn)




});