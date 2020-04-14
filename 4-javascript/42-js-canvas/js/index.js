window.onload = function(){
    //
    let canvas1 = document.querySelector('#canvas1')
    let context =  canvas1.getContext('2d')
    context.fillStyle = 'green'
    context.fillRect(50,50,50,100)//(position x,postion y,width,height)
    //set canvas lines color
    context.strokeStyle = "blue"
    //graw empty rectangle
    context.strokeRect(150,50,50,100)
    //draw line set start point
    context.moveTo(100,100)//(x,y)
    //draw a line
    context.lineTo(20,20)//(x,y)
    context.lineTo(50,20)
    context.lineTo(50,100)
    context.lineTo(500,20)
    //start new line
    context.moveTo(50,10)
    context.lineTo(100,20)
    
    //draw curve
    //if we did not set the new start point the start point gonna be the last point thaat the context arrived to

    context.moveTo(200,200)
    context.quadraticCurveTo(100,100,120,90)//(x curve,ycurve,x,y)
    //x curve y curve for direction of the curve
    //x,y end point of the line

    //draw text
    context.font = "30px ariel"
    context.fillText("Hello World",200,100)
    
    //make line visible
    context.stroke()
    





}