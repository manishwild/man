function add(num) {
    if (num == 0) {
        return 0
    }
        return add(num -1) + num   //else{} are not needed and code will be small
    
}
console.log(add(5))

function factor(num) {
    if (num == 1) {
        return 1
    }
        return factor(num -1) * num   //else{} are not needed and code will be small
    
}
console.log(factor(5))