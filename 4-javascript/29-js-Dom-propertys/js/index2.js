window.onload = () => {
let input = document.querySelector('#someInput')
console.log(input.getAttribute('placeholder'))
input.setAttribute('placeholder','new placeholder value')
console.log(input.getAttribute('blabla'))
}
window.onload = () =>{  
    let div = document.querySelector('#div1')
    console.log(div.getAttribute('class'))
    //input.setAttribute('class','something')
    //document.querySelector('#someInput').setAttribute('type','checkbox')
     //let input = document.querySelector('#someInput').setAttribute('type','checkbox')
     let input = document.querySelector('#someInput')
    //higher quailty code  than lines
    //input.setAttribute('type','checkbox')
    //input.setAttribute('class','someclass')
    let placeholder = input.getAttribute('placeholder')
    let counter = 0
    setInterval(() => {
        counter++
        let txt = placeholder.substr(0,counter)
        input.setAttribute('placeholder',txt)
        if (counter == placeholder.length) {
            counter = 0
        }
        
    }, 200);



    }