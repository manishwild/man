function isEven(num){
    if (num%2==0){
        return true
    }else{
        return false
    }
}
//console.log(isEven(67));
function checkNumber(num) {
    if(isEven(num)){
        console.log("It is Even Number")
    } else{
        console.log("It is Odd Number")
    }
}
checkNumber(5)
