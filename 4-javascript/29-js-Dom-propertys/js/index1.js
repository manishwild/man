//
window.onload = () => {
    let div = document.querySelector('#someDiv')
    div.style.backgroundColor = 'red'
    div.style.height = "50px"
    let i = 50
    let direction = true
setInterval(() => {
    if (direction) {
        i++
    } else {
        i--
    }
    if (i==100) {
        direction = false
    }
    if (i ==50) {
        direction = true
        
    }
    div.style.height = i+"px"
    
}, 10);


}
    