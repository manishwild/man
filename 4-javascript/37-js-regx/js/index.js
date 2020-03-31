//regx is inbuilt class
//you need to write your regex pattern inside/^HERE/
//\d a digit(number)
//[a-z]check char is between a and z
//\s space
let someText = 'mani@yahoo.com'
let regex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
let testResult = regex.test(someText)
console.log(testResult)

let someText1 = '1fH1fdf1d'
let regex1 = new RegExp(/^\d[a-z][A-Z]\d/)
console.log(regex1.test(someText1))

let someText2 = '1 H6fdf1d'
let regex2 = new RegExp(/^\d\s[A-Z]\d/)
console.log(regex2.test(someText2))

let someText3 = 'm@hhh.com'
let regex3 = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/)
console.log(regex3.test(someText3))

let someText4 = '+4917393412841'
let regex4 = new RegExp(/^((\+49)|(0049))(\s|)((\d{11})|(\d{10}))$/)
console.log(regex4.test(someText4))
//(/^\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/)
let someText6 = "www.yahoo.com"
let regex6 = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
console.log(regex6.test(someText6))

window.onload =function name() {
    let someText5 =document.querySelector('#button')
    let btn = document.querySelector('#button1')
    btn.addEventListener('click',function () {
    
    if (regex4.test(someText5.value)) {
        someText5.classList.add('valid')
        someText5.classList.remove('invalid')
    } else {
        someText5.classList.remove('valid')
        someText5.classList.add('invalid')
    }
    let url = document.querySelector('#button2')
    let regex7 = new RegExp(/^www.[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)
    
        if (regex7.test(url.value)) {
            url.classList.add('valid')
            url.classList.remove('invalid')
        } else {
            url.classList.remove('valid')
            url.classList.add('invalid')
        }
    

})

}

