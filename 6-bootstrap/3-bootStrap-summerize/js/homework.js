let arr = [
    [2,3,9,8,4,5,2],
    [5,9,2,3,5,2,2],
    [5,6,8,6,7,8,8],
    [2,3,7,8,3,5,2],
    [2,7,9,8,4,5,2]
]
for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr.length; x++) {
        console.log(arr[i][x]);
        
        
    }
    
}
//make the column rows in a new array
function transpose(arr) {
    return Object.keys(arr[0]).map(function (c) {
      return arr.map(function (r) {
        return r[c];
      });
    });
  }
  console.log(transpose([
    [2,3,9,8,4,5,2],
    [5,9,2,3,5,2,2],
    [5,6,8,6,7,8,8],
    [2,3,7,8,3,5,2],
    [2,7,9,8,4,5,2]
]));