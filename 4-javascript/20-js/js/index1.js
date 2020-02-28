function findshared(ar1,ar2) {
    let result = []
    ar1.forEach(item => {
        if(ar2.indexOf(item) > -1 && result.indexOf(item) == -1 ){
            
                result.push(item)
            
        }
    })
    return result
}
console.log(findshared([1,2,3,4,5,1],[1,2,2,5,2]))

function findshared1(ar1,ar2) {
    let result = []
    for (let index = 0; index < ar1.length; index++) {
        if(ar2.indexOf(ar1[index]) > -1 && result.indexOf(ar1[index]) == -1 ){
            
                result.push(ar1[index])
            
        }
    }
    return result
}
console.log(findshared1([1,2,3,4,5,1],[1,2,2,]))

