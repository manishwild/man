let x = 0
setTimeout(() => {
    document.write('Hi<br>')
    x = 5
    blaCallBack(x)
}, 5000);
document.write('Hi2<br>')

function blaCallBack(t) {
    document.write(10/t)
    
}