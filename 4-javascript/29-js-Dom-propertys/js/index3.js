window.onload = ()=>{
    let div1= document.querySelector('#ball')
    //div1.getElementsByClassName.top = '10x'
    let i = 0
    let direction = true
    let x = 180
    
    setInterval(() => {
        
        if (direction) {
            i++
        } else {
            i--
        }
        if (i==180) {
            direction = false
            
        
        }
        if (i ==0) {
            direction = true
            
            
        }
        if (x==i) {
            
            x+=20
        }
        
        div1.style.top = i+"px"
    }, 10);

}