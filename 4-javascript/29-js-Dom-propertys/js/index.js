window.onload = () => {
let div = document.querySelector('#someDiv')
div.style.backgroundColor = 'red'
div.style.height = "50px"
let i = 50
setInterval(() => {
    i++
    div.style.height = i+"px"

}, 10);

}
//it will increase height infity
