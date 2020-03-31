window.onload =function () {
    let counterElement = document.querySelector('#counterElement')
    let storedCounter = localStorage.getItem('browseCount')
    if (storedCounter != null) {
        // let counter = parseInt(storedCounter)
        // counterElement.innerText =counter
        // counter++
        // localStorage.setItem('browseCount',counter)
        //or with less lines
        counterElement.innerText =storedCounter
        localStorage.setItem('browseCount',parseInt(storedCounter)+1)
    }else{
        localStorage.setItem('browseCount',1)
        counterElement.innerText =0

    }
}
// function VisitCounter(){

//     var visits = GetCookie("counter");
    
//     if (!visits) { visits = 1;
    
//     let page = document.querySelector("#page");
//     page.innerText ="By the way, this is your first time here."

    
//     }
    
//     else {
    
//     visits = parseInt(visits) + 1;
    
//     page.innerText ="I note, you have been here " + visits + " times.";}
// setCookie("counter", visits,expdate)
// }
//     VisitCounter()