function mani(num) {
    if (num !== 0){
        return mani(num -1)+","+num

    }
    else{
         
         return num
         }
}
let result = mani(3)
console.log(result)

function opa(num) {
    if(num == 0){
        return num

    }else{
        return(opa(num -1)+num+",")
        //
    }
}
console.log(opa(9))

let arrowTextAdd = num => {
    if(num==0){
        return num
    }else{
        return arrowTextAdd(num - 1) + "," + num
    }
}
console.log(arrowTextAdd(5))