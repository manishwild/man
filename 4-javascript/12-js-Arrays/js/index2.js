// let arr = [2,4,1,9,5,7,6,3,2,7,1]
// function show (arr1){
// for (let i = 0; i < arr1.length; i++) {
    
//     document.write(arr1[i] + '<br>')
// }
//  }

//  let arr = [2,4,1,9,5,7,6,3,2,7,1]
//   let theSmallest = arr[0]
//   let theGreatest = arr[0]
//      for (let i = 1; i < arr.length; i++) {
//          if(arr[i] < theSmallest){
//              theSmallest = arr[i]
//          }
//          if(arr[i] > theGreatest){
//             theGreatest = arr[i]
//         }
         
//      }
//      //if(arr[i] > theSmallest) just change < if u wamt small > great
//      document.write('the smallest: ' + theSmallest + "<br>")
//      document.write('the greatest: ' + theGreatest + '<br>')

function findLimits(blaArr) {
  let theSmallest = blaArr[0]
  let theGreatest = blaArr[0]
     for (let i = 1; i < blaArr.length; i++) {
         if(blaArr[i] < theSmallest){
             theSmallest = blaArr[i]
         }
         if(blaArr[i] > theGreatest){
            theGreatest = blaArr[i]
        }
         
     }
     
     document.write('the smallest: ' + theSmallest + "<br>")
     document.write('the greatest: ' + theGreatest + '<br>')
    }
    findLimits([2,6,5,8,4,100,55])
