window.onload = function(){
    let animationCanvas = document.querySelector('#animationCanvas')
    let context = animationCanvas.getContext('2d')
    let status = 'running'
    let img = document.createElement('img')
    img.setAttribute('src','./imgs/player_big.png')
    img.addEventListener('load',function (e) {
        console.log(e);
        
        let imgmove = 0
        let boxMove = 460
        setInterval(() => {
            
        
            context.clearRect(0,0,48,60)
            if (status == 'running') {
               
        //context.drawImage(img,imgmove,0,48,60,imgmove,0,50,60)
        context.drawImage(img,imgmove,0,48,60,0,0,48,60)
        imgmove += 48
        if (imgmove == 384) {
            imgmove = 0
        } 
            }
            if (status == 'jumping') {
                context.drawImage(img,432,0,48,60,0,-30,48,60)
            }
        //context.clearRect(imgmove-48,0,48,60)
        
        // if (imgmove == 0) {
        //     context.clearRect(384-48,0,48,60)
        // }
        //draw a box
        if (boxMove + 40 > 48) {
            context.clearRect(boxMove +20,30,20,20)
        }else{
            if (status == 'jumping') {
                console.log('win');
                
            }else{
                console.log('crash')
            }
            
        }
        
        context.fillRect(boxMove,30,20,20)
        boxMove-=20
        if (boxMove == -20) {
            boxMove = 460
        }
        }, 175);
        
        

    })
    animationCanvas.addEventListener('click',function (e) {
        status = 'jumping'
        setTimeout(() => {
            status = 'running'
        }, 300);
    })
    
}
//full image width 480
//10 img frames each frame48
//0 --->432
//drawing image arguments
//void ctx.drawImage(image, dx, dy);
//void ctx.drawImage(image, dx, dy, dWidth, dHeight);
//void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);