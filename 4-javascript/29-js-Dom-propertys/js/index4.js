window.onload= ()=>{

    let div = document.querySelector('#someDiv')
    // div.style.height = '50px'
    // div.style.backgroundColor = 'red'
    // div.style.borderRadius ='10px 0 10px 0'
    div.classList.add('mystyle')
   div.classList.add('mystyle1')
    div.classList.remove('mystyle1')
    let father = div.parentElement
    father.style.border ='1px solid blue'

//let y=true
setInterval(() => {
    div.classList.toggle('mystyle')
    // if (y) {
        
    //     div.classList.add('mystyle')
    //     y = false  
    // } else {
        
    //     div.classList.remove('mystyle')
    //     y = true
    // }
    
    
}, 1000);
}