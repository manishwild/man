let arr = [2,-2, 6, 3, 4]
let newArr = []
arr.forEach(num => {
    newArr.push(num * 2 )
})
document.write(arr + '<br>')
document.write(newArr + '<br>')

let newArr2 = arr.map(item =>{return item * 3})//functiom(param){return param * 3}
document.write(newArr2 + '<br>')//map will return a New array with the changes of orginal array items


// let blaArr = []
// arr.forEach(item =>{
//     if (item > 0){
//         blaArr.push(item)
//     }
// })
let blaArr = arr.filter(item =>{return item > 0 && item < 4})
document.write(blaArr + '<br>')