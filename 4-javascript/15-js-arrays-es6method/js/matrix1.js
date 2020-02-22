let matrix = [
    [3,4,-4,41,52,6,22,4,55,11],
    [4,22,89,74,74,63,85,4,55,11],
    [9,-33,0,41,52,23,12,96,74,85],
    [22,445,90,67,5,6,23,4,55,45],
    [-5,4-66,89,56,5,6,34,4,55,56],
    [32,66,78,7,5,6,22,4,55,78],
    [99,-44,67,7,12,6,34,45,55,55],
    [12,6,56,7,23,6,22,4,55,564]
]
function counterFor(arr){
    let stor = 0
    for (let i = 0; i < arr.length; i++){
        for (let x = 0; x < arr[i].length; x++)
         if(arr[i][x]> stor){
            stor = arr[i][x]
    } 
       
        
        
        
    }
    return stor
}

document.write(counterFor(matrix)+ '<br>')
document.write('///////////////////////////////////' + '<br>') 

function findmax(arr){
    let max = arr[0][0]
    arr.forEach(item => {
        item.forEach(subItem => {
            if (max < subItem) {
                max = subItem
                
            }
            
        });
        
    });
    return max
}
document.write(findmax(matrix)+'<br>')

document.write('///////////////////////////////////' + '<br>') 


function findmin(arr){
    let min = arr[0][0]
    arr.forEach(item => {
        item.forEach(subItem => {
            if (min > subItem) {
                min = subItem
                
            }
            
        });
        
    });
    return min
}
document.write(findmin(matrix)+'<br>')