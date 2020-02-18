// let arr = []
// document.write (typeof(arr))
// let x = []
// if (x.length) {
//     alert('hi')
// }

let arr = [ 2,8,3,10,-6,8]
document.write(typeof(arr) + '<br>')
document.write(arr.length + '<br>')
document.write(arr.lastIndexOf(9) + '<br>')
document.write(arr[5] + '<br>')
arr[3]

let arr1 = arr
arr[3] = 9
document.write(arr[3] + '<br>')

let arr3 = [2,1]
arr3[2] = 5
document.write(arr3[2] + '<br>')