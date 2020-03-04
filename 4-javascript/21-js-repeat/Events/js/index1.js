//first event is onload window
window.onload = function () {
    //anything you put it here it will excuted after the all document is loadeds
    printBody();
}

function printBody() {
    console.log(typeof document.body)
}


// let obj = {
//     titles: 't',
//     name: 'Hello'
// }
// console.log(typeof document.body)

//second
function clickEventHandlerManish() {
    alert('done')
    console.log('done again')
}
//the third important Event double click
function doubleclick() {
    alert('done')
    console.log('double clicked')
    
}
function mouseOver() {
    console.log("mouse over")
}
function change() {
    console.log("changed") 
}
function keypress(arg) {
    console.log(arg) 
}