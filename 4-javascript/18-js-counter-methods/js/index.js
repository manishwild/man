document.querySelector('#sp1').innerText = '00:00:00'
let seconds = 0
let minutes = 0
let hours = 0
setInterval(()=> {
    document.querySelector('#sp1').innerText = formater(hours,minutes,seconds)
    seconds++
    if (seconds == 60) {
        seconds = 0
        minutes++
        if (minutes == 60) {
            minutes = 0
            hours++
            if (hours == 24) {
                hours = 0
            }
        }
    }
    //write condition

},1000)

function formater(hrs, mins, scs) {
    let result = ''
    if (hrs < 10) {
        result = result + '0'+ hrs.toString()
    }else{
        result = result + hrs.toString()
    }
    if (mins < 10) {
        result = result + ':0'+ mins.toString()
    }else{
        result = result + ':' + mins.toString()
    
}
if (scs < 10) {
        result = result +':0'+ scs.toString()
    }else{
        result = result + ':' +scs.toString()
    
    }
return result
}