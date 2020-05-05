window.onload = () =>{
    const input = document.querySelector('#test')
    const par = document.querySelector('#test>p')
    input.addEventListener('blur',function (e) {
        console.log(e);
        alert('out input')
    })
    window.onhashchange=function (e) {
        alert(`please dont go`)
    }
}