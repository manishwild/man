window.onload =()=>{
    let container = document.querySelector('#container')
    container.addEventListener('click',function (e) {
        let ballDiv = document.createElement('div')
        ballDiv.classList.add('ball')
        //ball.setAttribute('class','ball')
        ballDiv.style.left =e.clientX-5 +"px"
        ballDiv.style.top =e.clientY-5 +"px"
        container.append(ballDiv)
        throwTheBall(ballDiv,e.clientY-5,e.clientX-5,500,10)
        //alert(e.clientX+"  "+e.clientY)
        //console.log(ball)
        //console.log(e)
        
    //div1.getElementsByClassName.top = '10x'
    // let i = e.clientY
    // let direction = true
    
    
    // setInterval(() => {
        
    //     if (direction) {
    //         i++
    //     } else {
    //         i--
    //     }
    //     if (i==490) {
    //         direction = false
            
        
    //     }
    //     if (i ==0) {
    //         direction = true
            
            
    //     }
        
        
    //     ball.style.top =i+"px"
    

    // }, 10);


    })
    
}
function throwTheBall(ball, y, x, parentHight, ballHeight) {
    ball.style.left = x
    let down = true
    let counter = y
    setInterval(() => {
        ball.style.top = counter+ 'px';
        if(down){
            counter++;
        } else {
            counter--;
        }
        if(counter == parentHight - ballHeight){
            down = false
        }
        if(counter == 0){
            down = true
        }
    }, 1);
  }

function realThrowTheBall(ball, y, x, parentHight, ballHeight) {
    ball.style.left = x
    let down = true
    let counter = y
    let maxHeight = y
    let inerv = setInterval(() => {
        ball.style.top = counter+ 'px';
        if(down){
            counter++;
        } else {
            counter--;
        }
        if(counter == parentHight - ballHeight){
            down = false
            maxHeight += 20
        }
        if(counter == maxHeight ){
            down = true
        }
        if(parentHight - ballHeight < maxHeight || counter < maxHeight){
            clearInterval(inerv)
        }
    }, 1);
  }