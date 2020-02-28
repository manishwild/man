let arr = [-5,6,0,6,12,3,3]
function removeDupl(array) {
    let result = []
    array.forEach(element => {
        if(result.indexOf(element) == -1){
            result.push(element)
        }
    
    });
    return result
}
console.log(removeDupl(arr))

let arr1 = [1,2,3,4]
let arr2 = [1,2,3,4]
let arr3 = arr1
console.log(arr1)
if (arr1 == arr3) {
    console.log('equal')
} else{
    console.log('not equal')
}


function checkEqual(ar1,ar2) {
    if (ar1.length == ar2.length) {
        for (let i = 0; i < ar1.length; i++) {
            if (ar1[i] != ar2[i]) {
                return false
            }
            
        }
        return true
    
} 
    return false

}
console.log(checkEqual([1,2,3,4],[1,2,3,4]))