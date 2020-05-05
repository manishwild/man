window.onload = function () {
    let Canvas = document.querySelector('#gameCanvas')
    let context =Canvas.getContext('2d')
    let img = document.createElement('img')
    let score = document.querySelector('#score') 
    img.setAttribute('src','./imgs/player_big.png')
    context.moveTo(0,100)
    context.lineTo(600,100)
    context.fillRect(580,79,20,20)
    //context.clearRect(580,79,20,20)
   
    // context.fillRect(560,79,20,20)
    // context.clearRect(560,79,20,20)
    // context.fillRect(540,79,20,20)
    // context.fillRect(520,79,20,20)
    // context.fillRect(500,79,20,20)
 context.stroke()
   let boxMove = 580
   let boxmoveCheck = true
   let boxmoveTime = 100
   function boxmove() {
    
        context.clearRect(boxMove+20,79,20,20)
        context.fillRect(boxMove,79,20,20)
        
        if (boxMove==0) {
            boxMove =580
        }else{
            boxMove = boxMove -20
        }
        if (boxmoveCheck) {
            setTimeout(() => {
            boxmove()
        },boxmoveTime);
        }
        
       
   } 
   boxmove()
   
        //  let boxInterval=setInterval(() => {
        //     context.clearRect(boxMove+20,79,20,20)
        //     context.fillRect(boxMove,79,20,20)
            
        //     if (boxMove==0) {
        //         boxMove =580
        //     }else{
        //         boxMove = boxMove -20
        //     }

        //  }, 100);
    
    img.onload =function (e) {
    //to show full image
    //context.drawImage(img,0,39,480,60)
    //480/10=48
    //context.drawImage(img,0,0,48,60,0,39,48,60)
    //context.clearRect(0,39,48,60)
    // context.drawImage(img,48,0,48,60,0,39,48,60)
    // context.clearRect(0,39,48,60)
    // context.drawImage(img,96,0,48,60,0,39,48,60)
    // context.clearRect(0,39,48,60)
    // context.drawImage(img,144,0,48,60,0,39,48,60)
    // context.drawImage(img,336,0,48,60,0,39,48,60)
    //position of each charachter is (charachter index -1) *48
    let imgRun = 0
    let scoreCounter = 0 
    let charachterInerval =setInterval(() => {
        context.clearRect(0,0,48,99)
        
        if (status == 'running') {
            context.drawImage(img,imgRun,0,48,60,0,39,48,60)
        }else{
            context.drawImage(img,imgRun,0,48,60,0,0,48,60)

        }
        
        
        if (imgRun == 336) {
            imgRun = 0
        }else{
            imgRun +=48
        }
        if (boxMove <= 39 && status == 'running') {
            // console.log('crash')
            //clearInterval(boxInterval) 
            boxmoveCheck = false
            clearInterval(charachterInerval)
            context.fillStyle = "red"
            context.font = "60px ariel"
    context.fillText("!!!Crashed!!!",200,99)
    
            //
        }
        if (boxMove <= 39 && status == 'jumping') {
            console.log('jumping')
            scoreCounter++
            
            score.innerText = scoreCounter 
            if (boxmoveTime > 50) {
                boxmoveTime -=10
            }
            
        }
    }, 150);

    }
    let status = 'running'
    window.onkeypress = function (e) {
        //console.log(e);
        if(e.key == ' '){
        //console.log('jump');
        status = 'jumping'
        setTimeout(() => {
            status = 'running'
        }, 500);
            
        }
        
    }
    



}

//increase the box speed every sucess
//student grade system