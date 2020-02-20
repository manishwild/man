function counterForeach (arr, num){
    let stor = 0
    arr.forEach(item => {
        if(item == num){
            stor++
        }
        
    })
    return stor
}
let ourArray = [1,5,5,6,1,5,7,8,-1]
document.write(counterForeach(ourArray,1) + '<br>')

function counterFor(arr,num){
    let stor = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == num){
            stor++
        }
        
        
    }
    return stor
}
//let ourArray = [1,5,5,6,1,5,7,8,-1]
document.write(counterFor(ourArray,5))