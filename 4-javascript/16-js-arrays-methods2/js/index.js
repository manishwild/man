let fruits = ['apple','banana','watermelon','grape','orange','cherry']
//find the first fruit inside array which contain char a
let blaValue = fruits.find(fruit => fruit.indexOf('a') > -1)
document.write(blaValue + '<br>')
document.write(typeof blaValue + '<br>')
//find the first fruit inside the array which char 'a' is the third charachter
let blaValue1 = fruits.filter(fruit => fruit.indexOf('a') == 2)
document.write(blaValue1 + '<br>')
document.write(typeof blaValue1 + '<br>')
document.write('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br>')
// (for of) will iterate over array Items
for (let item of fruits ) {
   document.write(item +'<br>')
}


// (for in) will iterate throw array indexes
for (let idx in fruits ) {
   document.write(idx +':'+fruits[idx] +'<br>')
}

document.write('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\<br>')
