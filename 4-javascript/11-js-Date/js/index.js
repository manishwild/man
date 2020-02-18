let x = new Date()
document.write(typeof(x) + '<br>')
document.write(x + '<br>')

let y = new Date(1986,2,18)
document.write(y + '<br>')

document.write(y.getFullYear() + '<br>')//return year
document.write(y.getDate()+ '<br>')//return day 1-30
document.write(y.getMonth()+'<br>')//return month 0-11
document.write(y.getDay()+ '<br>')// return day
document.write(Date.now()+ '<br>')//retur the number of millisecond from 1,1970,00:00;00 until now

let date1 = new Date ('01.01.2018')
document.write(date1 +'<br>')

let date2 = new Date ('01,03,2018')
document.write(date2 +'<br>')
document.write((date2 - date1)/1000/60/60/24 +'<br>')

let date3 = new Date ('1986,02,18 17:30:00')
let date4 = Date.now()
document.write((date4-date3)/1000/60/60/24/365 +'<br>')//calculate date of birth