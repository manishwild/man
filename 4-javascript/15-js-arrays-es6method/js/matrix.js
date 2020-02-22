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
let newArr = []
matrix.forEach(num => {
    newArr.push(num    )
})
document.write(matrix + '<br>')
document.write('//////////////////' + '<br>')
document.write(newArr + '<br>')
document.write('//////////////////' + '<br>')
for (let i = 0; i < matrix.length; i++) {
    for (let x = 0; x < matrix[i].length; x++) {
        document.write(matrix[i][x] + '<br>')
    
        
    }
    
}
document.write('//////////////////' + '<br>')
function printNewLine(arr){
    arr.forEach(item => {
        item.forEach(subItem => {
            document.write(subItem + '<br>')
            
        });
        
    });
}
printNewLine(matrix)
document.write('//////////////////' + '<br>')
for (let i = 0; i < matrix.length; i++) {
    let sum = 0
    for (let x = 0; x < matrix[i].length; x++) {
        sum += matrix[i][x]
        
        
    }
    document.write(sum + '<br>')
    
    
}
document.write('///////////////////////////////////' + '<br>')

function printsum(arr){
    let mainstor = 0
    arr.forEach(item => { 
        let stor = 0
        item.forEach(subItem =>{
            stor += subItem
        })
        mainstor += stor
        document.write(stor + '<br>')

    })
    document.write(mainstor +'<br>')
}
printsum(matrix)
