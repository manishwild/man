window.onload = ()=>{


    let btn = document.querySelector('#someBtn')

//this is first way to add event dyanamicilly
    // btn.addEventListener('click',function (event) {
    //     alert('Hello world')
    //     //all cvomand here will run when you click the button
    //     console.log(event)
    // })

    //second way to add event dynamicaly
    btn.onclick = function (e) {
       // alert("Hello")
        if (e.clientY>15) {
            console.log('down')
        }else{
            console.log('up')
        }
    }

    let container=document.querySelector('#container')
    let someInput = document.createElement('input')
    //someInput.type = 'text'//first way
    someInput.setAttribute('type','text')
    container.append(someInput)
    someInput.addEventListener('keypress',function (e) {
        console.log(e)
    })




}