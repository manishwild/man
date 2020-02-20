let fruits = ['Banana','Apple','cherry','watermelon']
// for(let i = 0; i < fruits.length; i++) {
//     document.write(fruits[i]+'<br>')
// }

// fruits.reverse().forEach(blaFruit => 
//     document.write(blaFruit + '<br>')

// )

let check = false
fruits.forEach((blaFruit) => {
    if(blaFruit.indexOf('water') != -1){ 
    check = true
    }
})
document.write(check +'<br>')