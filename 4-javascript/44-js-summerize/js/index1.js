window.onload = function (e) {
    const btn1 = document.querySelector('#btn1')
    const btn2 = document.querySelector('#btn2')
    let container = document.querySelector('#container')
    let newDiv = document.createElement('div')
    container.append(newDiv)
    btn1.addEventListener('click',() => {
        alert('Hello')
        prompt('hello')
    })
    //second way 
    // btn1.onclick=function () {
    //     alert('hello')
    // }
    btn2.addEventListener('click',(e) => {
        console.log(e);
        
        newDiv.style.background = 'red'
        newDiv.style.height ='100px'
        newDiv.style.width ='100px'
        
          
        
        
            
    })

}