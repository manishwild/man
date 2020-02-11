let num1 = 2.5
let rounded = Math.round(num1)
console.log(rounded)
console.log(typeof(rounded))

console.log(Math.PI)
let num2 = Math.sqrt(9)
console.log(num2)

console.log(Math.random())
console.log(Math.round(Math.random()*3))

function somfunc(){
    let num = Math.round(Math.random()*5)
switch (num) {
    case 0:
        
        return"you are lucky"
        break
    case 1:   
         return "you are dead"
        break
    case 2:   
        return "If there is two of you,world will be destroy"
        break
    case 3:   
        return "you are nothing"
        break
    case 4:   
        return "you are unique"
        break                                  

    default:
        return "we don't have this option"
        break
}
}
console.log(somfunc())